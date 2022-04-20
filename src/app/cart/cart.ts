import { Component } from '@angular/core';
import { CartService } from '../service/cart';

@Component({
  selector: 'cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {

  Carts:any=[]
  
  updatecartObj:any={
    id:'',
    name:'',
    description:'',
    imageUrl:'',
    price: undefined
}
  
deleteRecordID:any;


  cart:any ={
    id:'',
    name:'',
    description:'',
    imageUrl:'',
    price: undefined
}
constructor(private api: CartService){

  this.getCarts();

}

deletecart(){
  this.api.deleteCart(this.deleteRecordID).subscribe((data:any) => {
    alert('success');
    this.getCarts();
});


}
updateCart(){
  var cart={
    product:this.updatecartObj,
    id:this.updatecartObj.id
  }
  this.api.updateCart(this.updatecartObj.id,cart).subscribe((data:any) => {
    alert('success');
    this.getCarts();
});


}
getCarts(){
  this.api.getCart().subscribe((data:any) => {
    this.Carts= data;
});

}
createCart(){
   var cart={
    product:this.cart,
    id:this.cart.id
  }
this.api.createCart(cart).subscribe((data:any) => {
  alert('success');
  this.getCarts();
});
}

  }
