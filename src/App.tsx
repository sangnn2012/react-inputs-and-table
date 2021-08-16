import "./App.scss";
import Inputs from "./components/Inputs";
import LoadList from "./components/LoadList";
import React, { useState } from "react";
// import Load from "models/Load.model";
import Pagination from "models/Pagination.model";
import DropdownInput from "components/DropdownInput";
interface Loads {
  data: Array<any>;
  total: number;
}

type Language = 'en-US' | 'vi-VN' | 'es-ES' | 'hi-HI';


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

  const languages: Language[] = ['en-US', 'vi-VN', 'es-ES', 'hi-HI'];
  const [lang, setLang] = useState<string>('en-US');
  
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
    
    // setProducts(prevProducts => {
    //   data: [newLoadData, ...prevProducts.data],
    //   total: ++prevProducts.total
    // });

    setProducts(cloneProducts)
  }

  function handleLanguageChange(newLang: Language) {
    setLang(newLang);
    console.log({newLang});
  }

  return (
    <div className="app">
      <DropdownInput label={'Language Selector:'} placeholder={''} isRequired={false} currentItem={lang} options={languages} onItemChosen={handleLanguageChange}/>
      <Inputs onSubmitForm={handleSubmitForm} />
      <LoadList products={products} language={lang} dataState={dataState} onDataStateChange={dataStateChange} onDataReceived={dataReceived} />
    </div>
  );
}

export default App;
