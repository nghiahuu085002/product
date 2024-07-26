import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() data!: any;
  @Output() dataChange = new EventEmitter<any>();
  dataProducts: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  selectedSize = null;
  selectedColor: any = null;
  isDisabled = true;
  total = 0;



  product_tmp: any;

  checkBuy = {
    color: "",
    size: "",
    quantity: 0
  }

  ngOnInit() {
    let id: any = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(id);
    if (id) {
      this.productService.getProductsById(id).subscribe(data => {
        this.dataProducts = data;
        console.log(this.dataProducts);


        if (this.dataProducts.colors.length > 0) {
          this.selectedColor = this.dataProducts.colors[0].color_name;
          this.product_tmp = this.dataProducts.colors[0].images;
          this.checkBuy.color = this.selectedColor;
        }
      }, error => {
        console.log(error);

      })

    }
  }

  calTotal() {
    this.total = 0;
    this.total += this.dataProducts.current_price * this.dataProducts.quantity;
    console.log(this.total);
  }

  selectSize(size: any) {
    this.selectedSize = size;
    this.checkBuy.size = size;
    this.checkBuyNow();
    console.log(this.checkBuy);
  }

  selectColor(color: string) {
    console.log(color);
    this.selectedColor = color;
    this.checkBuy.color = color;
    for (let c of this.dataProducts.colors) {
      // console.log(c);
      if (c.color_name === color) {
        this.product_tmp = c.images;
      }
    }
    this.checkBuyNow();
    console.log(this.checkBuy);
  }

  up() {
    this.dataProducts.quantity++;
    // console.log(this.data.quantity);
    this.checkBuy.quantity = this.dataProducts.quantity;
    this.checkBuyNow();
    console.log(this.checkBuy);
    this.calTotal()
  }

  down() {
    if (this.dataProducts.quantity >= 1) {
      this.dataProducts.quantity--;
      this.checkBuy.quantity = this.dataProducts.quantity;
      this.checkBuyNow();
      console.log(this.checkBuy);
      this.calTotal()
    }
  }

  checkBuyNow() {
    this.isDisabled = !(this.checkBuy.color && this.checkBuy.size && this.checkBuy.quantity > 0);
    return this.isDisabled;
  }

  buyNow() {
    alert('successfully');
  }

  quantityChange(e: any) {
    this.dataProducts.quantity = e.target.value;
    this.checkBuy.quantity = this.dataProducts.quantity;
    this.dataChange.emit(this.dataProducts);
    this.checkBuyNow();
    console.log(this.checkBuy);

  }
}