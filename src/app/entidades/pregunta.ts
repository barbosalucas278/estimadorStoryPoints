import { Opcion } from './opcion';

export interface Pregunta {
  preguntaId: number;
  texto: string;
  opciones: Opcion[];
}
