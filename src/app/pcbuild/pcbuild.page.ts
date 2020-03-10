import { CartService } from "./../services/cart.service";
import { Component, ViewChild, ElementRef } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-pcbuild",
  templateUrl: "./pcbuild.page.html",
  styleUrls: ["./pcbuild.page.scss"]
})
export class PcbuildPage {
  products = [];

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // this.products = this.cartService.getProducts();
  }
}
