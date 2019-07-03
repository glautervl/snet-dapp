import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import StyledDropdown from "../../../../common/StyledDropdown";
import { useStyles } from "./styles";
import SearchInputToggler from "./SearchInputToggler";
import ViewToggler from "./ViewToggler";

const ToolBar = ({ listView, total_count, handleSearchChange, toggleView }) => {
  const [showSearchInput, toggleSearchInput] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = event => {
    setSearchKeyword(event.target.value);
    const pagination = {
      offset: 0,
      q: event.target.value,
    };
    handleSearchChange(pagination);
  };

  const classes = useStyles();

  return (
    <Grid container spacing={24} className={classes.toolBar}>
      <Grid item xs={12} sm={6} md={6} lg={6} className={classes.sortBySection}>
        <span className={classes.sortbyTxt}>Sort by:</span>
        <StyledDropdown labelTxt="" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} className={classes.iconsContainer}>
        <span className={classes.servicesCount}>{total_count} services &nbsp;&nbsp;&nbsp; | </span>
        <button className={classes.searchBar}>
          <SearchInputToggler
            showSearchInput={showSearchInput}
            toggleSearchInput={toggleSearchInput}
            handleSearch={handleSearch}
            searchKeyword={searchKeyword}
          />
        </button>
        <ViewToggler listView={listView} toggleView={toggleView} />
      </Grid>
    </Grid>
  );
};

export default ToolBar;
