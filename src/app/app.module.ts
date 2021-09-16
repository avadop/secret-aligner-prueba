import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { TablaPacientesComponent } from './components/tabla-pacientes/tabla-pacientes.component';
import { TarjetaPacienteComponent } from './components/tarjeta-paciente/tarjeta-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPacientesComponent,
    TablaPacientesComponent,
    TarjetaPacienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
