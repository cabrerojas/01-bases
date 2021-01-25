import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes : Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]


  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  

  cambiarNombre( event:any ){
    console.log(event.target.value);
    
  }


  agregarNuevoPersonajes( event:Personaje ) {
    this.personajes.push( event )
    console.log('main page');
    
  }

  


}
