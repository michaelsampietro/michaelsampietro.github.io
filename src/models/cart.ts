import { Product } from './product';

export interface Cart {
    id?: number | string; // Criado para ser utilizado pela api
    products: Product[];
    shipping: number;
}
