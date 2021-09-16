import { Component, OnInit, Input } from '@angular/core';
import { ResumenPaciente } from 'src/app/interfaces/resumen_paciente.type';

@Component({
  selector: 'app-tabla-pacientes',
  templateUrl: './tabla-pacientes.component.html',
  styleUrls: ['./tabla-pacientes.component.scss']
})

export class TablaPacientesComponent implements OnInit {
  @Input() resumenPacientes: Array<ResumenPaciente>

  columnas = ["Nombre y Apellidos", "Clinica", "Objetivo Tratamiento", "Estado", "Acciones"];
  constructor() { }

  ngOnInit(): void {
  }

}
