import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products=[];
  updateFlage=0;
  productToBeUpdated;
  constructor(private productService:ProductService) {
    this.loadProducts();
   }

  ngOnInit() {
  }

  loadProducts()
  {
      this.productService.get().subscribe(responce=>{
      const body=responce.json();
      this.products=body;
    });
  }

  deleteProduct(item)
  {
    this.productService.delete(item).subscribe(responce=>{
      const body=responce.json();
      console.log(body);
      if(body["affectedRows"]==1)
      {
        alert('Record deleted succefully')
      }
      else
      {
        alert('Not deleted');
      }
      this.loadProducts();
    })
  }
  updateProduct(item)
  {
    this.updateFlage=1;
    this.productToBeUpdated=item;
  }
  saveProduct()
  {
    this.productService.update(this.productToBeUpdated).subscribe(responce=>{
      console.log(responce.json())
      this.updateFlage=0;
    })
  }

}
