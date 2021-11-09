import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  addproducts(data){
    return this.http.post("http://localhost:3000/products",data)
  }
  deleteProducts(id){
    //return this.http.delete("http://localhost:3000/products/"+id)
    console.log("http://localhost:3000/products/"+id);
    return this.http.delete("http://localhost:3000/products/"+id)
  }
  updateProducts(){

  }
}
