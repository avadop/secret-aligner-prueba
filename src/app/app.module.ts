import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { TablaPacientesComponent } from './components/tabla-pacientes/tabla-pacientes.component';
import { TarjetaPacienteComponent } from './components/tarjeta-paciente/tarjeta-paciente.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPacientesComponent,
    TablaPacientesComponent,
    TarjetaPacienteComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
