import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  title:string;
  description:string;
  price:number;
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
addProduct()
{
  this.productService.post(this.title,this.description,this.price).subscribe(responce=>{
    const body=responce.json();
    console.log(body);
    if(body["affectedRows"]==1)
    {
      alert('Record inserted succefully')
    }
    else
    {
      alert('Not Inserted');
    }
    
  });
}

}
