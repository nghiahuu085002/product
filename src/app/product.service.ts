import { Injectable } from '@angular/core';
import { Product } from './product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products = [
    {
      id: 'carouselExampleIndicators1',
      name: "iPhone 11",
      description: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make atype specimen book.",
      original_price: 280,
      current_price: 208,
      quantity: 0,
      price_unit: "USD",
      rating: 4.9,
      rating_count: 2140,
      colors: [
        {
          color_name: "trắng",
          color_code: "#fff",
          classBtn: 'btn-light',
          classBorder: 'border-light',
          images: [
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869727250_iphone-12-den-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869883593_iphone-12-den-2.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869258478_iphone-12-den-3.jpg",
          ]
        },
        {
          color_name: "đen",
          color_code: "#333",
          classBtn: 'btn-dark',
          classBorder: 'border-dark',
          images: [
           "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869727250_iphone-12-den-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869883593_iphone-12-den-2.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869258478_iphone-12-den-3.jpg",

          ]
        },
      ],
      size: ["64GB", "128GB"],
      size_unit: "",
      isInstock: true,
      isBesseller: false
    },
    {
      id: 'carouselExampleIndicators2',
      name: "iPhone 12",
      description: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make atype specimen book.",
      original_price: 320,
      current_price: 300,
      quantity: 0,
      price_unit: "USD",
      rating: 4.9,
      rating_count: 2140,
      colors: [
        {
          color_name: "xanh lá",
          color_code: "",
          classBtn: 'btn-success',
          classBorder: 'border-success',
          images: [
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869727250_iphone-12-den-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869883593_iphone-12-den-2.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869258478_iphone-12-den-3.jpg",

          ]
        },
        {
          color_name: "đen",
          color_code: "#333",
          classBtn: 'btn-dark',
          classBorder: 'border-dark',
          images: [
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869727250_iphone-12-den-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869883593_iphone-12-den-2.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059219869258478_iphone-12-den-3.jpg",
          ]
        },
        {
          color_name: "trắng",
          color_code: "#fff",
          classBtn: 'btn-light',
          classBorder: 'border-light',
          images: [
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059234481574752_iphone-12-trang-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059234481574752_iphone-12-trang-2.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059234481106033_iphone-12-trang-3.jpg",
          ]
        },
        {
          color_name: "xanh dương",
          color_code: "",
          classBtn: 'btn-info',
          classBorder: 'border-info',
          images: [
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059236214534473_iphone-12-xanh-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059236215530590_iphone-12-xanh-2.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/6/638059236213882089_iphone-12-xanh-3.jpg",
          ]
        },
      ],
      size: ["64GB", "128GB", "256GB"],
      size_unit: "",
      isInstock: true,
      isBesseller: false
    }
  ]
  // getProductById(id: any) {
  //   return this.products.find((product: any) => product.id === id);
  // }
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/products');

  }
  getProductsById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/products' + id);
  }
  createPost(post: Product): Observable<Product[]> {
    return this.http.post<Product[]>('http://localhost:5000/admin/store', post);
  }
}
