import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.scss']
})
export class NuevoPacienteComponent implements OnInit {
  @Input() formularioPaciente: FormGroup;

  @Output() accionesModal: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  guardarPaciente(){
    this.accionesModal.emit("guardar");
  }

  limpiarDatos(){
    this.accionesModal.emit("limpiar");
  }

  cerrar(){
    this.accionesModal.emit("cancelar");
  }

}
