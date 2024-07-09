import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  // cada que se renderiza el contenido
  constructor(){
    console.log('1.Constructor');
  }
  // cada vez que hay cambios en el componente
  ngOnChanges(changes: SimpleChanges){
    console.log('2.ngOnChanges');
    console.log(changes);
  }
  // se va a mostrar solamente la primera vez que se renderiza el componente
  ngOnInit(){
    console.log('3.ngOnInit');
  }
  // es casi lo mismo que ngOnChanges, este se puede personalizar mas
  ngDoCheck(){
    console.log('4.ngDoCheck');
  }
  //quita el componente de la vista
  ngOnDestroy(){
    console.log('5.ngOnDestroy');
  }


  today:Date = new Date();

  // recibir elementos del padre
  @Input() product!:Product;

  // enviar datos al padre
  @Output() onAddCart:EventEmitter<Product> = new EventEmitter();

  addCart(){
      this.onAddCart.emit(this.product);
  }

}
