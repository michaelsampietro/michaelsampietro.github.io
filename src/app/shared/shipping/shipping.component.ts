import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingForm: FormGroup;
  shippingCost = 0;

  constructor(private formBuilder: FormBuilder) {
    this.shippingForm = this.formBuilder.group({
      zip: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  calculateShippingFee() {
    console.log('frete ');
    this.shippingCost = 14.99;
  }

  clearShipping() {
    this.shippingCost = 0;
  }

}
