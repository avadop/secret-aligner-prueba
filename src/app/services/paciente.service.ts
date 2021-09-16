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
  BASIC_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getIdsPacientes(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${this.BASIC_URL}/ids`);
  }

  getPacientePorId(id: string): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.BASIC_URL}/${id}`);
  }
  getResumenPacientePorId(id: string): Observable<ResumenPaciente> {
    return this.httpClient.get<Paciente>(`${this.BASIC_URL}/${id}`).pipe(map(paciente => this.mapAResumenPaciente(id, paciente)));
  }

  private mapAResumenPaciente(id:string, paciente: Paciente): ResumenPaciente {
    return {
      id,
      nombre: `${paciente.datos_paciente.nombre} ${paciente.datos_paciente.apellidos}`,
      estado: paciente.ficha_dental.estado,
      clinica: paciente.ficha_dental.clinica,
      objetivo_tratamiento: paciente.ficha_dental.objetivo_tratamiento
    }
  }
}
