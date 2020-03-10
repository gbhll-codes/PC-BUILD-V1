import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";

export interface Product {
  // userId: BigInteger;
  // id: BigInteger;
  // title: string;
  // body: string;

  id: BigInteger;
  image: string;
  name: string;
  price: number;
  category: string;
  amount: number;
  quantity: BigInteger;
  // store: string;
  user_id: BigInteger;
  specs: string;
}

@Injectable({
  providedIn: "root"
})
export class CartService {
  url = "https://jsonplaceholder.typicode.com/posts";
  apiKey = ""; // <-- Enter your own key here!

  // data: Product[] = [
  //   {
  //     id: 0,
  //     name: "SSD",
  //     price: 1200,
  //     amount: 0,
  //     store: "3GX",
  //     specs: "Specs / Details"
  //   },
  //   {
  //     id: 1,
  //     name: "PROCESSOR",
  //     price: 7000,
  //     amount: 0,
  //     store: "BITSTOP",
  //     specs: "Specs / Details"
  //   },
  //   {
  //     id: 2,
  //     name: "MONITOR",
  //     price: 3000,
  //     amount: 0,
  //     store: "HYPERTECH",
  //     specs: "Specs / Details"
  //   },
  //   {
  //     id: 3,
  //     name: "MOUSE",
  //     price: 500,
  //     amount: 0,
  //     store: "3GX",
  //     specs: "Specs / Details"
  //   },
  //   {
  //     id: 4,
  //     name: "MOTHERBOARD",
  //     price: 5000,
  //     amount: 0,
  //     store: "PC GREEN",
  //     specs: "Specs / Details"
  //   },
  //   {
  //     id: 5,
  //     name: "GRAPHICS CARD",
  //     price: 4000,
  //     amount: 0,
  //     store: "GIOB",
  //     specs: "Specs / Details"
  //   }
  // ];

  // private cart = [];
  // private cartItemCount = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  getProducts(id) {
    return this.http.get(
      "https://polar-thicket-76440.herokuapp.com/api/product"
    );
  }

  // getProducts() {
  //   return this.data;
  // }

  // getCart() {
  //   return this.cart;
  // }

  // getCartItemCount() {
  //   return this.cartItemCount;
  // }

  // addProduct(product) {
  //   let added = false;
  //   for (let p of this.cart) {
  //     if (p.id === product.id) {
  //       p.amount += 1;
  //       added = true;
  //       break;
  //     }
  //   }
  //   if (!added) {
  //     product.amount = 1;
  //     this.cart.push(product);
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value + 1);
  // }

  // decreaseProduct(product) {
  //   for (let [index, p] of this.cart.entries()) {
  //     if (p.id === product.id) {
  //       p.amount -= 1;
  //       if (p.amount == 0) {
  //         this.cart.splice(index, 1);
  //       }
  //     }
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value - 1);
  // }

  // removeProduct(product) {
  //   for (let [index, p] of this.cart.entries()) {
  //     if (p.id === product.id) {
  //       this.cartItemCount.next(this.cartItemCount.value - p.amount);
  //       this.cart.splice(index, 1);
  //     }
  //   }
  // }
}
