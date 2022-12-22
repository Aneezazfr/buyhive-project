export interface IProduct {
    id?: number;
    product_name: string;
    minimum_order_quantity: string;
    price: string;
    stock_in_USA: boolean;
    // country: string;
    // category_name: string;
    images: string;
    product_certification: string;
    // setProductCount: (arg: string) => void
}
// export type ProductContextType = {
//   products: IProduct[];
//   getProducts: (product: IProduct) => void;
// };
// type ProductState = {
//     articles: IProduct[]
//   }
  
//   type ProductAction = {
//     type: string
//     product: IProduct
//   }
  
//   type DispatchType = (args: ProductAction) => ProductAction
  