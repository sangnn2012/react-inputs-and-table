import { State as GridState } from '@progress/kendo-data-query';
interface TableModel {
    dataState: GridState,
    onDataStateChange: Function,
    onDataReceived: Function
}

export default TableModel