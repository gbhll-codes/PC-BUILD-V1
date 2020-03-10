import { CartService } from "./../services/cart.service";
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CartmodalPage } from "./../pages/cartmodal/cartmodal.page";
import { BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  information = null;

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild("cart", { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.cartService.getProducts(id).subscribe(result => {
      this.information = result;

      console.log(this.information.product);
    });

    this.products = this.information.product;
    // this.cart = this.cartService.getCart();
    // this.cartItemCount = this.cartService.getCartItemCount();
  }

  // addToCart(product) {
  //   this.cartService.addProduct(product);
  //   this.animateCSS("tada");
  // }

  // async openCart() {
  //   this.animateCSS("bounceOutLeft", true);

  //   let modal = await this.modalCtrl.create({
  //     component: CartmodalPage,
  //     cssClass: "cart-modal"
  //   });
  //   modal.onWillDismiss().then(() => {
  //     this.fab.nativeElement.classList.remove("animated", "bounceOutLeft");
  //     this.animateCSS("bounceInLeft");
  //   });
  //   modal.present();
  // }

  // animateCSS(animationName, keepAnimated = false) {
  //   const node = this.fab.nativeElement;
  //   node.classList.add("animated", animationName);

  //   //https://github.com/daneden/animate.css
  //   function handleAnimationEnd() {
  //     if (!keepAnimated) {
  //       node.classList.remove("animated", animationName);
  //     }
  //     node.removeEventListener("animationend", handleAnimationEnd);
  //   }
  //   node.addEventListener("animationend", handleAnimationEnd);
  // }
}
