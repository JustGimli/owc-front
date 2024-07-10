import { makeAutoObservable } from "mobx";
import { Product } from "../utils/interfaces";

class CartStore {
  cart: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
  }

  get total() {
    return parseFloat(
      this.cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)
    );
  }

  get count() {
    return this.cart.length;
  }

  clearCart() {
    this.cart = [];
  }
}

const cartStore = new CartStore();
export default cartStore;
