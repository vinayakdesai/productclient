import { Http, Headers,ResponseOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://localhost:3000/product';
  constructor(private http:Http) { }

  get(){
    return this.http.get(this.url);
  }
  post(title:string,description:string,price:number)
  {
    const product={
      title:title,
      description:description,
      price:price
    };
    const headers=new Headers({'Content-Type':'application/json'});
    const requestOptions=new ResponseOptions({headers:headers});
    return this.http.post(this.url,product,requestOptions);
  }
  delete(product)
  {
    const newUrl=this.url+`/${product.id}`;
    return this.http.delete(newUrl);
  }
  update(product)
  {
    const temp={
      title:product.title,
      description:product.description,
      price:product.price
    };
    console.log(temp);
    const newUrl=this.url+`/${product.id}`;
    return this.http.put(newUrl,temp);
  }
}