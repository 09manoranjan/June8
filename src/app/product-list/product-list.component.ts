import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:any = [];
  constructor(private productSer:ProductService) { }

  ngOnInit() {
    this.getProductList();
  }
  getProductList(){
    this.productSer.getProducts().subscribe((result)=>{
      console.log("result----------->",result);
      this.productList = result;
    })
  }
  editProduct(val){
    document.getElementById("addNewProduct").click();
    console.log("data----->",val);
  }
  deleteProduct(val){
    console.log("data----->",val);
    Swal.fire({
      title:"Are you sure you want to delete ?",
      icon: "warning",
      text: "You can't recover data once deleted.",
      showCancelButton : true,
      cancelButtonText : "No",
      confirmButtonText : "Yes"
    }).then((result)=>{
      if(result.value){
        this.productSer.deleteProducts(val).subscribe((result)=>{
          console.log("result-------------->",result);
          Swal.fire("Success","Data deleted Successfully !!","success");
          //this.getProductList();
        },(error)=>{
          console.log("error-------------->",error);
        })
      }
    })
    
  }

}
