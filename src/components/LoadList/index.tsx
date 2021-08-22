import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { ProductsLoader } from "./products-loader";
import Table from "models/Table.model";
import Load from "models/Load.model";
import { IntlProvider, load, LocalizationProvider } from "@progress/kendo-react-intl";
import Loads from 'models/Loads.model';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import esNumbers from 'cldr-numbers-full/main/es/numbers.json';
import esCurrencies from 'cldr-numbers-full/main/es/currencies.json';
import esCaGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import esDateFields from 'cldr-dates-full/main/es/dateFields.json';
import esTimeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

import viNumbers from 'cldr-numbers-full/main/vi/numbers.json';
import viCurrencies from 'cldr-numbers-full/main/vi/currencies.json';
import viCaGregorian from 'cldr-dates-full/main/vi/ca-gregorian.json';
import viDateFields from 'cldr-dates-full/main/vi/dateFields.json';
import viTimeZoneNames from 'cldr-dates-full/main/vi/timeZoneNames.json';

import hiNumbers from 'cldr-numbers-full/main/hi/numbers.json';
import hiCurrencies from 'cldr-numbers-full/main/hi/currencies.json';
import hiCaGregorian from 'cldr-dates-full/main/hi/ca-gregorian.json';
import hiDateFields from 'cldr-dates-full/main/hi/dateFields.json';
import hiTimeZoneNames from 'cldr-dates-full/main/hi/timeZoneNames.json';

load(likelySubtags, currencyData, weekData);
load(esNumbers, esCurrencies, esCaGregorian, esDateFields, esTimeZoneNames );
load(viNumbers, viCurrencies, viCaGregorian, viDateFields, viTimeZoneNames );
load(hiNumbers, hiCurrencies, hiCaGregorian, hiDateFields, hiTimeZoneNames );


interface LoadListProps<Load> extends Table {
  products: {
    data: Array<Load>;
    total: number;
  };
  language: string;
}

const LoadList = (props: LoadListProps<Load>) => {
  const { products, language, dataState, onDataStateChange, onDataReceived } = props;

  return (
    <div className="load-list">
      <h2>Load List</h2>
      <LocalizationProvider language={language}>
        <IntlProvider locale={language}>
          <Grid filterable={false} sortable={true} pageable={true} {...dataState} data={products} onDataStateChange={(event) => onDataStateChange(event)}>
            <Column field="ID" title="ID" width="100px" />
            <Column field="FirstOrderedOn" title="Date" filter="date" format="{0:D}" width="100px"/>
            <Column field="UnitPrice" title="Unit Price" filter="numeric" format="{0:c}" width="100px"/>

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
        </IntlProvider>
      </LocalizationProvider>
      <ProductsLoader
        dataState={dataState}
        onDataReceived={(products: Loads<Load>) => {
          onDataReceived(products);
        }}
      />
    </div>
  );
};

export default LoadList;
