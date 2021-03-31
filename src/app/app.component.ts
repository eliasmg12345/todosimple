import { Component } from '@angular/core';
import { Tareax } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //A12 creando un array para agarra elementos
  //será del tipo tareax array es decir muchas tareas 

  arrTareas:Tareax[];
  constructor(){
    this.arrTareas=[]; 
  }
  onTareaCreada($event:any){
    //A12 tenemos las tareas dentro del array de la clase padre 
    //Lo siguiente sera esta app.component.html pasar esas tareas a la lista del html
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }
}
