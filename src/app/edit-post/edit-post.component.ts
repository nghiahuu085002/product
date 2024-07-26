import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  productName: string = '';
  productDescription: string = '';
  productPrice: number | null = null;
  productQauntity: number | null = null;
  isBestSeller = false;
  inStock = false;
  isDisabled = false;
  activeButton: number | null = null;
  activeSlideIndex: number = 0;
  activeColor: string | null = null;

  productSize: string[] = ["Ip 11", "Ip 11 pro", "Ip 11 Prm"];

  clickSize(index: number) {
    this.activeButton = index;
  }

  onButtonClick(color: string) {
    this.activeColor = color;
  }
  onSubmit() {
    // Add product logic here
    console.log('Product Name:', this.productName);
    console.log('Product Description:', this.productDescription);
    console.log('Product Price:', this.productPrice);
    console.log('Product Color:', this.activeColor);
    console.log('Product Size:', this.productSize[this.activeButton || 0]);
    console.log('Product Quantity:', this.productQauntity);
  }
}
