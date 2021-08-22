import "./App.scss";
import Inputs from "./components/Inputs";
import LoadList from "./components/LoadList";
import React, { useState } from "react";
// import Load from "models/Load.model";
// import Pagination from "models/Pagination.model";
import Language from "models/Language.model";
import DropdownInput from "components/DropdownInput";
import Load from 'models/Load.model';
import Loads from 'models/Loads.model';
import { GridDataStateChangeEvent } from "@progress/kendo-react-grid";
import { State as GridState } from '@progress/kendo-data-query';
function App() {
  const initLoads: Loads<Load> = {
    data: [],
    total: 0,
  };
  const [products, setProducts] = useState<Loads<Load>>(initLoads);
  const [dataState, setDataState] = useState<GridState>({
    take: 10,
    skip: 0,
  });
  console.log({dataState})
  const languages: Language[] = ['en-US', 'vi-VN', 'es-ES', 'hi-HI'];
  const [lang, setLang] = useState<Language>('en-US');
  
  function dataStateChange(event: GridDataStateChangeEvent) {
    setDataState(event.dataState);
  }
  function dataReceived(products: Loads<Load>) {
    setProducts(products);
  }
  function handleSubmitForm(newLoadData: Load) {
    // console.log({ newLoadData });
    const cloneProducts: Loads<Load> = {
      data:[],
      total: 0
    }
    cloneProducts.data = [...products.data];
    cloneProducts.data.unshift(newLoadData);
    cloneProducts.total = ++products.total;
    
    // setProducts(prevProducts => {
    //   data: [newLoadData, ...prevProducts.data],
    //   total: ++prevProducts.total
    // });

    setProducts(cloneProducts)
  }

  function handleLanguageChange(newLang: string) {
    const lang = newLang as Language;
    setLang(lang);
    console.log(newLang);
  }

  return (
    <div className="app">
      <DropdownInput label={'Language Selector:'} placeholder={''} isRequired={false} currentItem={lang} options={languages} onItemChosen={handleLanguageChange}/>
      <Inputs onSubmitForm={handleSubmitForm} />
      <LoadList products={products} language={lang} dataState={dataState} onDataStateChange={(event: GridDataStateChangeEvent) => dataStateChange(event)} onDataReceived={dataReceived} />
    </div>
  );
}

export default App;
