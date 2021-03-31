//1A Crear una clase exportable
//luego crear los componentes formulario el que nos permita introducir los datos
//y posteriormente el componente padre los reconozca
// [ng generate component components/formulario --skipTests]
// crear el componente lista paa luego  listar los todos que vayan generando
// [g generate component components/lista --skipTests]

//el formulario debe de ser capaz de recoger los datos y al darle al boton enviarlo
//hacia el padre.....LA ESTRUCTURA PRINCIPAL DE LA APLICACION SERA LA SIGUIENTE
//En app.component.html aparte de eliminar tedremos que tener el componente formulario
//y el componente lista

export class tAREA{
    titulo: string;
    descripcion: string;

    constructor(pTitulo='',pDescripcion=''){
        this.titulo=pTitulo;
        this.descripcion=pDescripcion;
    }
}