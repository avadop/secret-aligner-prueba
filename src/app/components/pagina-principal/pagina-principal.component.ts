import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  valorBusqueda: FormControl = new FormControl('');
  nuevoPacienteModal: boolean = false;
  formularioNuevoPaciente: FormGroup;

  constructor(private pacienteService: PacienteService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.pacienteService.getResumenTodosPacientes().subscribe(respuesta => {
      this.resumenPacientes = respuesta;
      this.resumenPacientesFiltrados = respuesta;
    });
    this.crearFormulario();
  }

  realizarBusqueda() {
    if (this.valorBusqueda.value.length >= 3) {
      this.resumenPacientesFiltrados = [];
      this.resumenPacientesFiltrados = this.resumenPacientes.filter((resumen: ResumenPaciente) => resumen.nombre.toLocaleLowerCase().includes(this.valorBusqueda.value.toLowerCase()));
    } else {
      this.resumenPacientesFiltrados = this.resumenPacientes;
    }
  }

  abrirModalNuevoPaciente() {
    this.nuevoPacienteModal = true;
  }

  capturarAccionesModal(evento: string) {
    if (evento === "cancelar") {
      this.nuevoPacienteModal = false;
    } else {
      if (evento === "guardar") {
        this.pacienteService.crearPaciente(this.formularioNuevoPaciente.value).subscribe();
      }
      this.crearFormulario();
    }
  }

  crearFormulario() {
    this.formularioNuevoPaciente = this.formBuilder.group({
      id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 13),
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



}
