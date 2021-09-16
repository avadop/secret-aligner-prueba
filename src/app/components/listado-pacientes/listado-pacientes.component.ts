import { Component, OnInit } from '@angular/core';

import { ResumenPaciente } from 'src/app/interfaces/resumen_paciente.type';
import { PacienteService } from 'src/app/services/paciente.service'

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styleUrls: ['./listado-pacientes.component.scss']
})
export class ListadoPacientesComponent implements OnInit {
  resumentTodosPacientes: Array<ResumenPaciente>;

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.resumentTodosPacientes = new Array();
    this.pacienteService.getIdsPacientes().subscribe(ids =>
      ids.forEach(id => {
        this.pacienteService.getResumenPacientePorId(id).subscribe(resumen => this.resumentTodosPacientes.push(resumen))
      })
    );
  }

}
