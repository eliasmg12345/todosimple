//A9 1er paso importamos output
import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
//A5
import{Tareax} from '../../models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //A9 2do paso: para luego utilizarla aqui dentro de las propiedades de nuestra clase
  //luego tengo que poner el nombre del evento que yo quiero emitir ejem tareaCreada
  //estos output siempre tienen el mismo tipo EventEmitter<> lo unico que tenemos que 
  // entre <> es que vamos a emitir..nosotros queremos emitir el objeto tareax

  //cuando yo emita este objeto es lo que le va a llegar al padre con la nueva 
  //tarea que estamos generando aqui en el contructor
  @Output() tareaCreada:EventEmitter<Tareax>;
  
  //A5 para no complicarnos vamos a generar una componente de tipo tarea
  //como ya tenemos el modelo simplemente le tengo que decir que es de tipo tareax
  //para eso importamos arriba 
  //Este objeto no puede ser otra cosa que no sea tareax..
  //luego inicializamos en el constructor
  nuevaTarea: Tareax;

  constructor() { 
    //A5 al ser un objeto sera de tipo Tareax
    this.nuevaTarea=new Tareax();
    //A5ya tengo un objeto al cual le puedo enganchar los diferentes campos de mi formulario
    //con el ngModel  .... 

    //A9 inicializamos con su generacion de instancia EventEmitter
    this.tareaCreada=new EventEmitter();
  }

  ngOnInit(): void {
  }
  //A8 tengo que procurar que cuando pulse el boton enviar quiero eviar hacia el padre
  //es decir hacer un output hacia el padre la nueva tarea que yo estoy creando
  //para eso sigamos los pasos para hacer un output
  //1er paso
  onClick(){
    //A10 paso ultimo lo utilizo en el punto exacto donde se hace click
    this.tareaCreada.emit(this.nuevaTarea);
    //para borrar los campos de texto vemos que los campos de texto en el html
    //estan con la propiedad nueva tarea simplemente hay que reiniciar esa tarea
    //entonces esto se emite y luego se borra
    //ahora como capturamos desde el Padre esta emision?
    //nos vamos a app.component.html
    this.nuevaTarea=new Tareax();
  }

}
