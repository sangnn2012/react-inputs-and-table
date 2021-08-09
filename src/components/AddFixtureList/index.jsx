import { useState } from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { FixturesLoader } from "./fixtures-loader.jsx";

const AddFixtureList = (props) => {

  const { fixtures, dataState, onDataStateChange, onDataReceived } = props;

  return (
    <div className="load-list">
      <h2>Fixture List</h2>
      <Grid filterable={false} sortable={true} pageable={true} {...dataState} data={fixtures} onDataStateChange={(event) => onDataStateChange(event)}>
        <Column field="ID" title="ID" width="50px" />
        <Column field="FixtureName" title="Fixture Name" width="200px" />
        <Column field="LoadType" title="Load Type" width="100px" />
        <Column field="Dim" title="Dim" width="60px" />
        <Column field="LowerLimit" title="Lower Limit" width="60px" />
        <Column field="UpperLimit" filter="numeric" title="Upper Limit" width="60px" />
        <Column field="FixtureWatts" title="Fixture Watts" width="60px" />
        <Column field="FixtureType" title="Fixture Type" width="60px" />
        <Column field="Manufacturer" filter="boolean" title="Manufacturer" width="100px" />
        <Column field="ModelNumber" filter="numeric" title="Model Number" width="90px" />
        <Column field="Description" filter="numeric" title="Description" width="300px" />
      </Grid>

      <FixturesLoader dataState={dataState} onDataReceived={(fixtures)=>{onDataReceived(fixtures)}} />
    </div>
  );
};

export default AddFixtureList;
