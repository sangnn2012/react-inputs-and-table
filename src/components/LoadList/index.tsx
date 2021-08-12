import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { ProductsLoader } from "./products-loader.jsx";
import Table from "models/Table.model";
import Load from "models/Load.model";

interface LoadListProps extends Table {
  products: {
    data: Array<any>,
    total: number
  }
}

const LoadList = (props: LoadListProps) => {

  const { products, dataState, onDataStateChange, onDataReceived } = props;

  return (
    <div className="load-list">
      <h2>Load List</h2>
      <Grid filterable={false} sortable={true} pageable={true} {...dataState} data={products} onDataStateChange={(event) => onDataStateChange(event)}>
        <Column field="ID" title="ID" width="100px" />
        <Column field="RoomName" title="Room Name" width="100px" />
        <Column field="LoadName" title="Load Name" width="200px" />
        <Column field="CircuitNumber" title="Circuit Number" width="200px" />
        <Column field="FixtureType" title="Fixture Type" width="200px" />
        <Column field="LoadType" filter="numeric" title="Load Type" width="200px" />
        <Column field="FixtureQuantity" title="Fixture Quantity" width="300px" />
        <Column field="FixtureWatts" title="Fixture Watts" width="200px" />
        <Column field="IsDim" filter="boolean" title="Dim" width="200px" />
        <Column field="LowerLimit" filter="numeric" title="Lower Limit" width="200px" />
        <Column field="UpperLimit" filter="numeric" title="Upper Limit" width="200px" />
      </Grid>

      <ProductsLoader dataState={dataState} onDataReceived={(products: Load[])=>{onDataReceived(products)}} />
    </div>
  );
};

export default LoadList;
