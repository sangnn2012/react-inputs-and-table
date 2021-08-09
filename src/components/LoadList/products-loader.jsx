import * as React from "react";
import * as ReactDOM from "react-dom";
import { toODataString } from "@progress/kendo-data-query";

export const ProductsLoader = (props) => {
  const baseUrl = "https://demos.telerik.com/kendo-ui/service-v4/odata/Products?$count=true&";
  const init = {
    method: "GET",
    accept: "application/json",
    headers: {},
  };

  const lastSuccess = React.useRef("");
  const pending = React.useRef("");

  const requestDataIfNeeded = () => {
    if (pending.current || toODataString(props.dataState) === lastSuccess.current) {
      return;
    }
    pending.current = toODataString(props.dataState);
    fetch(baseUrl + pending.current, init)
      .then((response) => response.json())
      .then((json) => {
        lastSuccess.current = pending.current;
        pending.current = "";

        // if (toODataString(props.dataState) === lastSuccess.current) {
        //   props.onDataReceived.call(undefined, {
        //     data: json.value,
        //     total: json['@odata.count']
        //   });
        // } else {
        //   requestDataIfNeeded();
        // }

        const aRow = {
          RoomName: "Bath Room",
          LoadName: "a load name",
          CircuitNumber: "BH-12345",
          FixtureType: "type 1",
          LoadType: "a load type",
          FixtureQuantity: 10,
          FixtureWatts: 100,
          IsDim: true,
          LowerLimit: 5,
          UpperLimit: 95,
        };
        const data = new Array(65).fill(0).map((_, index) => Object.assign({ID: ++index}, aRow));

        let { take, skip } = props.dataState
        const dataToShow = data.slice(skip, take+skip)
        props.onDataReceived({
          data: dataToShow,
          total: data.length,
        });
      });
  };

  requestDataIfNeeded();
  return pending.current ? <LoadingPanel /> : null;
};

const LoadingPanel = () => {
  const loadingPanel = (
    <div className="k-loading-mask">
      <span className="k-loading-text">Loading</span>
      <div className="k-loading-image" />
      <div className="k-loading-color" />
    </div>
  );
  const gridContent = document && document.querySelector(".k-grid-content");
  return gridContent ? ReactDOM.createPortal(loadingPanel, gridContent) : loadingPanel;
};
