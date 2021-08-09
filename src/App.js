import './App.scss';
import Inputs from './components/Inputs';
import LoadList from './components/LoadList';
import { useState } from 'react';
function App() {
  const [products, setProducts] = useState([]);
  const [dataState, setDataState] = useState({
    take: 10,
    skip: 0,
  });

  function dataStateChange(event) {
    setDataState(event.dataState);
  }
  function dataReceived(products) {
    setProducts(products);
  }
  function handleSubmitForm(newLoadData) {
    console.log({ newLoadData })
    const cloneProducts = {}
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
