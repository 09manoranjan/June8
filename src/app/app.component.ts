import { Component } from '@angular/core';
import { ProductService } from "./product.service";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'June8';
  constructor(private productSer:ProductService,
    private route:Router){}
  addNewProducts(product){
    console.log("product from val-------------->",product);
    this.productSer.addproducts(product.value).subscribe((result)=>{
      console.log("result-------------->",result);
      document.getElementById('closeBtn').click();
      Swal.fire("Success", "Product Added Successfully !", "success");
      location.reload();
    })
  }
}
