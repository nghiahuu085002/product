import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  username = "Hữu Nghĩa";
  total = 0;

  static products = [
    {
      id: 1,  // Add unique id
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 1000,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 11", "Ip 11 pro", "Ip 11 Prm"]
    },
    {
      id: 2,  // Add unique id
      productTitle: 'iPhone 14',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 3,  // Add unique id
      productTitle: 'iPhone 13',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 899,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 4,  // Add unique id
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 5,  // Add unique id
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 6,  // Add unique id
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 7,  // Add unique id
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 8,  // Add unique id
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 9,  // Add unique id
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },{
      id: 10,
      productTitle: 'iPhone 15',
      productContent: 'Năm nay, Apple đã hoàn thiện iPhone 15 Pro Max với khung máy titan, mang tới tổng thể nhẹ và bền bỉ hơn so với thế hệ cũ. Có thể nói',
      productPriceSale: 999,
      productPrice: 1299,
      quantity: 0,
      productSlide: [
        { image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg", color: "black" },
        { image: "https://kenh14cdn.com/203336854389633024/2022/12/8/photo-6-16705172607391548503731.jpeg", color: "pink" },
        { image: "https://static.kinhtedothi.vn/w960/images/upload/2023/07/28/r-7.jpg", color: "Violet" }
      ],
      productSize: ["Ip 15", "Ip 15 pro", "Ip 15 Prm"]
    },
  ];
  get products(){
    return ProductListComponent.products;
  }

  calTotal() {
    this.total = 0;
    this.products.forEach((product: any) => {
      this.total += product.productPriceSale * product.quantity;
    });
  }

  onProductDataChange(updatedProduct: any) {
    const productIndex = this.products.findIndex(p => p.id === updatedProduct.id);
    if (productIndex !== -1) {
      // Update the product at the found index
      this.products[productIndex] = { ...this.products[productIndex], ...updatedProduct };
      this.calTotal();
    }
  }
}
