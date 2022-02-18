import { Opcion } from './opcion';

export interface Pregunta {
  id: number;
  texto: string;
  valorCamino: number;
  isChangeCamino: boolean;
  opciones: Opcion[];
}
