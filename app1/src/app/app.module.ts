import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpModule } from '@angular/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,FormsModule,
    RouterModule.forRoot([
      {path:'product-list', component:ProductlistComponent},
      {path:'product-add', component:AddproductComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
