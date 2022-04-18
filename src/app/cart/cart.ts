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


}
updateCart(){


}
getCarts(){
  this.api.getCart().subscribe((data:any) => {
    this.Carts= data;
});

}
createCart(){
this.api.createCart(this.cart).subscribe((data:any) => {
  alert('success');
  this.getCarts();
});
}

  }
