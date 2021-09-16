import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { ResumenPaciente } from "../interfaces/resumen_paciente.type";
import { Paciente } from "../models/paciente.model"

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  BASIC_URL = "http://localhost:3000/pacientes";

  constructor(private httpClient: HttpClient) { }

  getResumenTodosPacientes(): Observable<Array<ResumenPaciente>> {
    return this.httpClient.get<Array<Paciente>>(`${this.BASIC_URL}`).pipe(map(pacientes => pacientes.map(paciente => this.mapAResumenPaciente(paciente))));
  }

  private mapAResumenPaciente(paciente: Paciente): ResumenPaciente {
    return {
      id: paciente.id,
      nombre: `${paciente.datos_paciente.nombre} ${paciente.datos_paciente.apellidos}`,
      estado: paciente.ficha_dental.estado,
      clinica: paciente.ficha_dental.clinica,
      objetivo_tratamiento: paciente.ficha_dental.objetivo_tratamiento
    }
  }
}
