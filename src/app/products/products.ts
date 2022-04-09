import { Component } from '@angular/core';
import { RestApiService } from '../service/products-service';


@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class AppProducts {
  title = 'demo';
  products:any;

  product:any ={
      id:'',
      name:'',
      description:'',
      imageUrl:'',
      price: undefined
  }




  updateProductObj:any ={
    id:'',
    name:'',
    description:'',
    imageUrl:'',
    price: undefined
}



deleteRecordID:any;

  constructor( private api:RestApiService){

      this.getProducts();
  }


  getProducts(){
    this.api.getEmployees().subscribe((data:any) => {
      this.products= data;
  });

  }
createProduct(){
  this.api.createProduct(this.product).subscribe((data:any) => {
    alert('success');
    this.getProducts();
});
}
updateProduct(){
  this.api.updateProduct(this.updateProductObj.id,this.updateProductObj).subscribe((data:any) => {
    alert('success');
    this.getProducts();
});
}

deleteProduct(){
  this.api.deleteProduct(this.deleteRecordID).subscribe((data:any) => {
    alert('success');
    this.getProducts();
});
}
  submit(){
    this.createProduct();
}



}
