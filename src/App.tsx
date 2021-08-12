import "./App.scss";
import Inputs from "./components/Inputs";
import LoadList from "./components/LoadList";
import { useState } from "react";
// import Load from "models/Load.model";
import Pagination from "models/Pagination.model";

interface Loads {
  data: Array<any>;
  total: number;
}

function App() {
  const initLoads: Loads = {
    data: [],
    total: 0,
  };
  const [products, setProducts] = useState<Loads>(initLoads);
  const [dataState, setDataState] = useState<Pagination>({
    take: 10,
    skip: 0,
  });

  function dataStateChange(event: any) {
    setDataState(event.dataState);
  }
  function dataReceived(products: Loads) {
    setProducts(products);
  }
  function handleSubmitForm(newLoadData: Loads) {
    console.log({ newLoadData });
    const cloneProducts: Loads = {
      data:[],
      total: 0
    }
    cloneProducts.data = [...products.data];
    cloneProducts.data.unshift(newLoadData);
    cloneProducts.total = ++products.total;
    setProducts(cloneProducts);
  }

  return (
    <div className="app">
      <Inputs onSubmitForm={handleSubmitForm} />
      <LoadList products={products} dataState={dataState} onDataStateChange={dataStateChange} onDataReceived={dataReceived} />
    </div>
  );
}

export default App;
