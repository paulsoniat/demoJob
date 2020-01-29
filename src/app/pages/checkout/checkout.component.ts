import { Component, OnInit, Input, HostListener } from '@angular/core';

declare const strikeCheckout: StripeCheckoutStatic

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  @Input() amount;
  @Input() description;

  handler: StripeCheckoutHandler;
  
  confirmation: any;
  loading = false;

  ngOnInit() {

    this.handler = StripeCheckout.configure({
      key: 'pk_test_3oEP1zZhERRaqHzPB4gSP6K600wQkjIUcR',
      image: 'none',
      locale: "auto",
      source: async (source) => {
        this.loading = true;
        //something here

      }
    });
  }

  @HostListener('window:popstate')
  onpopstate() {
    this.handler.close();
  }

}
