import React, { Fragment, useContext } from "react";
import { Route } from "react-router-dom";
import StatsContext from "../../context/stats/statsContext";

import Hitters from "./hitters/Hitters";
import HitterSearch from "./searches/HitterSearch";
import HitterTitle from "../layout/titles/HitterTitle";
import YearSelect from "../layout/YearSelect";
import Search from "../layout/Search";

const HitterPage = () => {
  const statsContext = useContext(StatsContext);

  const { hitterSearch, hitters, loading } = statsContext;

  if (hitterSearch.length === 0 && hitters.length === 0) {
    return (
      <Fragment>
        <HitterTitle />
        <Search />
        <HitterSearch />
        <YearSelect />
        <Hitters />
      </Fragment>
    );
  } else if (hitterSearch.length > 0) {
    return (
      <Fragment>
        <HitterTitle />
        <Search />
        <HitterSearch />
      </Fragment>
    );
  } else if (hitters.length > 0) {
    return (
      <Fragment>
        <HitterTitle />
        <YearSelect />
        <Hitters />
      </Fragment>
    );
  }
};

export default HitterPage;
