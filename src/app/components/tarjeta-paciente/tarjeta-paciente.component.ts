import { Component, OnInit, Input } from '@angular/core';
import { ResumenPaciente } from 'src/app/interfaces/resumen_paciente.type';

@Component({
  selector: 'app-tarjeta-paciente',
  templateUrl: './tarjeta-paciente.component.html',
  styleUrls: ['./tarjeta-paciente.component.scss']
})
export class TarjetaPacienteComponent implements OnInit {
   @Input() resumenPaciente: ResumenPaciente;
  constructor() { }

  ngOnInit(): void {
  }

}
