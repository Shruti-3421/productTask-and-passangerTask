

export interface Iproduct{
    pname: string;
    pdetails: string;
    pstatus: ProductsStatus;
    id: string;
}

export enum ProductsStatus{
    Inprogress= "In progress",
    Dispatched= "Dispatched",
    Delivered= "Delivered"
}