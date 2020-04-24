export interface Product {
    id?: number | string; // A ser usado pela api
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
}