import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.scss']
})
export class NuevoPacienteComponent implements OnInit {
  formularioNuevoPaciente: FormGroup;

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formularioNuevoPaciente = this.formBuilder.group({
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 13),
      datos_paciente: this.formBuilder.group({
        nombre: '',
        apellidos: '',
        fecha_nacimiento: '',
        sexo: '',
      }),
      ficha_dental: this.formBuilder.group({
        clinica: '',
        otros_datos: this.formBuilder.group({
          recorte_alineadores: '',
          secretretainer: false
        })
      })
    });
  }

  guardarPaciente(){
    console.log("paciente", this.formularioNuevoPaciente);
    this.limpiarDatos();
  }

  limpiarDatos(){
    this.crearFormulario();
  }

}
