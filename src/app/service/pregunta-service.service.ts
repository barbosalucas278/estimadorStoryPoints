import { Injectable } from '@angular/core';
import { Pregunta } from '../entidades/pregunta';

@Injectable({
  providedIn: 'root',
})
export class PreguntaServiceService {
  listaDePreguntas: Pregunta[] = [
    {
      preguntaId: 1,
      texto:
        '¿Esta tarea puede realizarla solo o necesita de otros equipos/personas?',
      opciones: [
        { opcionId: 1, texto: 'Puedo solo', puntaje: 0 },
        { opcionId: 2, texto: 'Necesito recursos', puntaje: 0 },
      ],
    },
    {
      preguntaId: 2,
      texto: '¿Cuántos días de trabajo le demanda la tarea?',
      opciones: [
        { opcionId: 1, texto: 'Menos de 3', puntaje: 1 },
        { opcionId: 2, texto: 'De 3 a 5', puntaje: 4 },
        { opcionId: 3, texto: 'De 5 a 10', puntaje: 8 },
      ],
    },
    {
      preguntaId: 3,
      texto:
        '¿Cuántos equipos/personas participan en el cumplimiento de la tarea?',
      opciones: [
        { opcionId: 1, texto: '2 o 3', puntaje: 1 },
        { opcionId: 2, texto: '4 a 6', puntaje: 2 },
        { opcionId: 3, texto: 'mas de 6', puntaje: 4 },
      ],
    },
    {
      preguntaId: 4,
      texto: '¿La tarea requiere ser testeada?',
      opciones: [
        { opcionId: 1, texto: 'Si', puntaje: 2 },
        { opcionId: 2, texto: 'No', puntaje: 0 },
      ],
    },
    {
      preguntaId: 5,
      texto: '¿La tarea requiere ser implementada en TEST/UAT?',
      opciones: [
        { opcionId: 1, texto: 'Si', puntaje: 4 },
        { opcionId: 2, texto: 'No', puntaje: 0 },
      ],
    },
    {
      preguntaId: 6,
      texto: '¿La tarea requiere ser implementada en PROD?',
      opciones: [
        { opcionId: 1, texto: 'Si', puntaje: 8 },
        { opcionId: 2, texto: 'No', puntaje: 0 },
      ],
    },
  ];
  constructor() {}
  getPreguntaById(id: number): Pregunta {
    const pregunta: any = this.listaDePreguntas.find(
      (p) => p.preguntaId === id
    );
    if (!pregunta) {
      throw new Error('no se encontro la pregunta');
    }
    return pregunta;
  }
}
