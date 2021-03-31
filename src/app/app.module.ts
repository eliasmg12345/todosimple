import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//A4
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    //A4 posteriormente la incluimos en el modulo dentro del modulo de
    //nuestra aplicacion... en los imports....es decir cuales son las librerias
    //externas que forman parte de mi aplicacion
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
