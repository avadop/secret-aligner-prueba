import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResumenPaciente } from 'src/app/interfaces/resumen_paciente.type';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {
  resumenPacientes: Array<ResumenPaciente> = new Array();
  resumenPacientesFiltrados: Array<ResumenPaciente> = new Array();
  valorBusqueda:FormControl = new FormControl('');
  
  constructor(private pacienteService: PacienteService) {}

  ngOnInit():void {
    this.pacienteService.getResumenTodosPacientes().subscribe(respuesta => {
      this.resumenPacientes = respuesta;
      this.resumenPacientesFiltrados = respuesta;
    })
  }

  realizarBusqueda(){
    if(this.valorBusqueda.value.length >= 3){
      this.resumenPacientesFiltrados = this.resumenPacientes.filter((resumen: ResumenPaciente) => resumen.nombre.toLocaleLowerCase().includes(this.valorBusqueda.value.toLowerCase()));
    } else {
      this.resumenPacientesFiltrados = this.resumenPacientes;
    }
  }


}
