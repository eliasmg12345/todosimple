import { Component, Input, OnInit } from '@angular/core';
import { Tareax } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //A14 creando el decorador INPUT llamado tareas que va a ser el mismo tipo
  //del objeto que yo le estoy pasando desde el componente padre por lo tanto 
  //como esta pasndo un array va  aser array
  //estpois datos los tengo que pasar desde el padre...en donde el unico punto
  //de union entre app-lista y su componente padre es el html 
  @Input() tareas: Tareax[];
  constructor() { 
    this.tareas=[];
  }

  ngOnInit(): void {
  }

  //A16 creando un metodo que recorra toda la lista de  tareas que me vaya estructurando
  // una lista html de un UL por ejemplo para luego mostrarlas en el html

  mostrarTareas(){
    let resultado='<ul>';
    for(let tareax of this.tareas){
      resultado+=`<li>${tareax.titulo} - ${tareax.descripcion}</li>`;
    }
    resultado+='</ul>';
    return resultado;
  }

}
 