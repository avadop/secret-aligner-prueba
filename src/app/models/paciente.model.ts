import { DatosPaciente } from "../interfaces/datos_paciente.type";
import { FichaDental } from "../interfaces/ficha_dental.type";

export interface Paciente {
  id: string;
  datos_paciente: DatosPaciente;
  ficha_dental: FichaDental;
}