import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductPage } from 'src/models/product-page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/models/product';
import { carbon } from 'src/models/pillows/carbon';
import { aloeVera } from 'src/models/pillows/aloe-vera';
import { pure } from 'src/models/pillows/pure';
import { lavanda } from 'src/models/pillows/lavanda';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {

  images: string[] = [];
  currentImage = '';
  selectedProduct: ProductPage = null;
  shippingForm: FormGroup;
  isMobile = false;
  shippingCost = 0;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private cartService: CartService) {

    this.route.params.subscribe(param => {
      console.log(param.model);
      if (param.model === 'carbon' || !param.model) {
        this.selectedProduct = carbon;
      } else if (param.model === 'pure') {
        this.selectedProduct = pure;
      } else if (param.model === 'aloe-vera') {
        this.selectedProduct = aloeVera;
      } else if (param.model === 'lavanda') {
        this.selectedProduct = lavanda;
      }
    });

    this.shippingForm = this.formBuilder.group({
      zip: ['', Validators.required]
    });

    this.currentImage = this.selectedProduct.images[0].image;
  }

  ngOnInit(): void {
    this.mobileCheck(true);
  }

  ngAfterViewInit(): void {
    const thumbnails = document.getElementsByClassName('thumbnail')[0].classList.add('active');
  }

  changeImage(image: string, ev: any) {
    if (image === this.currentImage) {
      return;
    }

    const thumbnails = document.getElementsByClassName('thumbnail');
    Array.from(thumbnails).forEach(thumbnail => {
      thumbnail.classList.remove('active');
    });

    ev.explicitOriginalTarget.offsetParent.classList.add('active');


    const imageEl = document.getElementById('image');
    imageEl.classList.toggle('animate');
    window.setTimeout( () => {
      imageEl.classList.toggle('animate');
      this.currentImage = image;
    }, 300);
  }

  calculateShippingFee() {
    console.log('frete ');
    this.shippingCost = 14.99;
  }

  clearShipping() {
    this.shippingCost = 0;
  }

  addToCart(product: ProductPage) {
    const prod: Product = {
      id: product.productId,
      name: product.name,
      price: product.price,
      quantity: 1,
      thumbnail: product.images[0].image
    };

    this.cartService.add(prod, 1);
  }

  private mobileCheck(listener: boolean = false) {
    if (window.innerWidth >= 768) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }

    if (listener) {
      window.addEventListener('resize', () => {this.mobileCheck(); });
    }
  }

}
