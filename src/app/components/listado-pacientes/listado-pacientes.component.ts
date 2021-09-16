import { Component, Input, SimpleChanges } from '@angular/core';

import { ResumenPaciente } from 'src/app/interfaces/resumen_paciente.type';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.scss']
})
export class ListadoPacientesComponent{
  @Input() resumenTodosPacientes: Array<ResumenPaciente>;
  vistaTabla: boolean = true;
  tamanyoPagina: number = 5;
  numeroPagina: number = 1;
  totalPaginas: number;
  resumenPacientesPaginados: Array<ResumenPaciente>;

  ngOnChanges(changes:SimpleChanges){
    if(changes.resumenTodosPacientes.currentValue.length > 0){
      this.numeroPagina = 0;
      this.totalPaginas = this.calcularTotalPaginasEntero(this.resumenTodosPacientes.length/this.tamanyoPagina);
      this.cargarDatosPaginados();      
    }
  }

  setVistaTabla(value: boolean): void {
    this.vistaTabla = value;
  }

  cambioTamanyoPagina(value:number){
    this.tamanyoPagina = value;
    this.totalPaginas = this.calcularTotalPaginasEntero(this.resumenTodosPacientes.length/this.tamanyoPagina);
    this.numeroPagina = 0;
    this.cargarDatosPaginados();
  }

  cambioDePagina(value: number){
    this.numeroPagina = value;
    this.cargarDatosPaginados();
  }

  cargarDatosPaginados(): void {
    this.resumenPacientesPaginados = this.resumenTodosPacientes.slice(0 + this.numeroPagina*this.tamanyoPagina,this.tamanyoPagina + this.tamanyoPagina*this.numeroPagina);
  }

  calcularTotalPaginasEntero(division: number) {
    if(division% 1 !== 0){
      return Math.trunc(division) + 1;
    }
    else return division;
  }

  paginaPrevia(){
    if(this.numeroPagina > 0) {
      this.cambioDePagina(this.numeroPagina-1);
    }
  }
  paginaSiguiente(){
    if(this.numeroPagina < this.totalPaginas - 1) {
      this.cambioDePagina(this.numeroPagina+1)
    }
  }

}
