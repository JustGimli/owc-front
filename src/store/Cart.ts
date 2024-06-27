import { makeAutoObservable } from "mobx";

class CartStore {
  cart = [];

  constructor() {
    makeAutoObservable(this);
  }

  // addToCart(product) {
  //   this.cart.push(product);
  // }

  // removeFromCart(product) {
  //   this.cart = this.cart.filter(item => item.id !== product.id);
  // }

  // get total() {
  //   return this.cart.reduce((sum, product) => sum + product.price, 0);
  // }

  // get count() {
  //   return this.cart.length;
  // }
}

const cartStore = new CartStore();
export default cartStore;
