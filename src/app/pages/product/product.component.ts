import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, carbon } from 'src/models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  images: string[] = [];
  currentImage = '';
  selectedProduct: Product = null;
  shippingForm: FormGroup;
  isMobile = false;
  shippingCost = 0;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

    this.route.params.subscribe(param => {
      console.log(param.model);
      if (param.model === 'carbon' || !param.model) {
        this.selectedProduct = carbon;
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

  changeImage(image: string) {
    if (image === this.currentImage) {
      return;
    }

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
