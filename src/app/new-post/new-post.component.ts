import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

// Định nghĩa interface cho mô hình sản phẩm
interface ProductModel {
  name: string;
}

@Component({
  selector: 'new-post-product',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  @ViewChildren('fileInput') fileInputs!: QueryList<ElementRef>;
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  colorFields: { color: string, images: string[] }[] = [{ color: '', images: [] }];
  productModels: ProductModel[] = [{ name: '' }]; // Sử dụng interface cho kiểu dữ liệu của mảng productModels
  productQuantity: number = 0;
  inStock: boolean = true;

  addColorField() {
    this.colorFields.push({ color: '', images: [] });
  }

  removeColorField(index: number) {
    if (this.colorFields.length > 1) {
      this.colorFields.splice(index, 1);
    }
  }

  addModel() {
    this.productModels.push({ name: '' }); // Thêm một đối tượng mới của kiểu ProductModel vào mảng productModels
  }

  removeModel(index: number) {
    if (this.productModels.length > 1) {
      this.productModels.splice(index, 1);
    }
  }

  openFileChooser(index: number) {
    const fileInput = this.fileInputs.toArray()[index];
    fileInput.nativeElement.click();
  }

  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.colorFields[index].images.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.productName && this.productDescription && this.productPrice > 0 && this.productQuantity > 0) {
      const product = {
        productName: this.productName,
        productDescription: this.productDescription,
        productPrice: this.productPrice,
        selectedColors: this.colorFields,
        productModels: this.productModels,
        productQuantity: this.productQuantity,
        inStock: this.inStock
      };
      console.log('Product submitted:', product);
      // Perform further actions such as sending the data to a server
    } else {
      console.error('Form is not valid');
    }
  }
}
