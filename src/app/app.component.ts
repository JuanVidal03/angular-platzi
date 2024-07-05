import { Component } from '@angular/core';

// modelos productos
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'Juan Vidal';
  
  // crud de personas
  personas:String[] = ['Juan', 'Carlos', 'Julian'];
  addPerson(){
    this.personas.push('Nuevo item');
  }

  deletePerson(index:number){
    this.personas.splice(index, 1);
  }

  // productos
  products:Product[] = [
    {
      id: '1',
      image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg',
      title: 'Casmisa a Cuadros',
      price: 70000,
      description: 'Esta es una camisa a cuadros muy bonita', 
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg',
      title: 'Casmisa Estampada',
      price: 45000,
      description: 'Esta es una camisa a estampada muy bonita', 
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/4602025/pexels-photo-4602025.jpeg',
      title: 'Conjunto de mujer',
      price: 135000,
      description: 'Este es un conjunto de mujer muy aestethic', 
    }
  ]

  // recibiendo data del hijo
  receivedProduct(product:Product){
    console.log(product);
  }

}
