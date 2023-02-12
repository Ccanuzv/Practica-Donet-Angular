export interface IPagination {
    count: number;
    page: number;
    pageCount: number;
    pageSize: number;
    data: Array<any>;
}