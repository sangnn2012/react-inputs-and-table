import Pagination from './Pagination.model'
interface TableModel {
    dataState: Pagination,
    onDataStateChange: Function,
    onDataReceived: Function
}

export default TableModel