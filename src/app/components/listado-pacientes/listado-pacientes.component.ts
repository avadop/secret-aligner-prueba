import { Component, OnInit } from '@angular/core';

import { ResumenPaciente } from 'src/app/interfaces/resumen_paciente.type';
import { PacienteService } from 'src/app/services/paciente.service'

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.scss']
})
export class ListadoPacientesComponent implements OnInit {
  resumenTodosPacientes: Array<ResumenPaciente> = new Array();
  vistaTabla: boolean = true;
  tamanyoPagina: number = 5;
  numeroPagina: number = 1;
  totalPaginas: number;
  resumenPacientesPaginados: Array<ResumenPaciente>;

  constructor(private pacienteService: PacienteService) {}
  
  ngOnInit():void {
    this.pacienteService.getResumenTodosPacientes().subscribe(respuesta => {
      this.resumenTodosPacientes = respuesta;
      this.totalPaginas = this.calcularTotalPaginasEntero(respuesta.length/this.tamanyoPagina);
      this.cargarDatosPaginados();
    })
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
