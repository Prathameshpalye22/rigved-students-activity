import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {name: "Mobile", brand: ["Vivo", "Oppo", "Oneplus"]},
    {name: "Laptop", brand: ["HP", "Dell", "Lenovo", "Acer"]}
  ];
}
