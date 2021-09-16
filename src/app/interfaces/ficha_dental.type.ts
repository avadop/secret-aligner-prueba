export interface FichaDental {
  acadas_tratamiento: string;
  dientes_no_mover: Array<number>;
  estado: string;
  clinica: string;
  objetivo_tratamiento: string;
  otros_datos: OtrosDatos;
}

export interface OtrosDatos {
  recorte_alineadores: string;
  alineadores_pasivos: boolean;
  secretretainer: boolean;
}