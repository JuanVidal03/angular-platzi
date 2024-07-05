import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
    selector:'app-product',
    templateUrl: './product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent{
    // recibir elementos del padre
    @Input() product!:Product;

    // enviar datos al padre
    @Output() onAddCart:EventEmitter<Product> = new EventEmitter();

    addCart(){
        this.onAddCart.emit(this.product);
    }

}