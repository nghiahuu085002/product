import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  variants: Array<{ color: string, customerName: string, image: any[] }> = [];

  addVariant(e: any) {
    e.preventDefault();
    this.variants.push({ color: '#563d7c', customerName: '', image: [] });
    console.log(this.variants);

  }

  removeVariant(index: number) {
    this.variants[index] = { color: '#563d7c', customerName: '', image: [] };
    this.variants.splice(index, 1);
  }


  onSelect(event: any, i: number) {
    console.log(event);
    this.variants[i].image.push(...event.addedFiles);
  }

  onRemove(event: any, i: number) {
    console.log(event);
    this.variants[i].image.splice(this.variants[i].image.indexOf(event), 1);
  }

}
