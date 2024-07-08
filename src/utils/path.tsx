
import CartPage from "../pages/CartPages/CartPage";
import CheckoutPage from "../pages/checout/CheckoutPage";
import CollectionPage from "../pages/collections/Collection";
import ProductPage from "../pages/product/ProductPage";
import {  CART_PATH, CHECKOUT_PATH, COLLECTION_PATH, PRODUCT_PATH } from "./consts";

export const MainRoots = [
    {
      Component: CollectionPage,
      path: COLLECTION_PATH,
    },
    {
      Component: CheckoutPage,
      path: CHECKOUT_PATH,
    },
    {
      Component: ProductPage,
      path: PRODUCT_PATH,
    },
    {
      Component: CartPage,
      path: CART_PATH,
    },
  
  ]