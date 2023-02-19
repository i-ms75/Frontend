// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart: any[] = [];

  constructor(private http: HttpClient) {}

 

  
  // Method to perform sale operation 
  postItem(product: Product[]): Observable<any> {
    return this.http.post('http://localhost:8081/pos', product);
  }

  //method to retrieve all items from the database
  getAllMedicines()
  {
    return this.http.get<any[]>('http://localhost:8081/searchMedicines');
  }
  
  

  // Method to add an item to the cart
  addItemToCart(item: any) {
    this.itemsInCart.push(item);
  }

  // Method to retrieve the items in the cart
  getItemsInCart() {
    return this.itemsInCart;
  }
}
