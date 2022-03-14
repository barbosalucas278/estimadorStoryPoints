import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pregunta } from '../entidades/pregunta';

@Injectable({
  providedIn: 'root',
})
export class PreguntaServiceService {
  @Output() listaUpdated: EventEmitter<Pregunta[]> = new EventEmitter();
  //private listaDePreguntas: Pregunta[] = [];
  //Test con varios caminos
  private listaDePreguntas: Pregunta[] = [
    {
      id: 1,
      texto:
        '¿Esta tarea puede realizarla solo o necesita de otros equipos/personas?',
      opciones: [
        { opcionId: 1, texto: 'Puedo solo', valor: 1 },
        { opcionId: 2, texto: 'Necesito recursos', valor: 2 },
      ],
      valorCamino: 0,
      isChangeCamino: true,
    },
    {
      id: 2,
      texto: '¿Cuántos días de trabajo le demanda la tarea?',
      opciones: [
        { opcionId: 1, texto: 'Menos de 3', valor: 1 },
        { opcionId: 2, texto: 'De 3 a 5', valor: 4 },
        { opcionId: 3, texto: 'De 5 a 10', valor: 8 },
      ],
      valorCamino: 1,
      isChangeCamino: false,
    },
    {
      id: 3,
      texto:
        '¿Cuántos equipos/personas participan en el cumplimiento de la tarea?',
      opciones: [
        { opcionId: 1, texto: '2 o 3', valor: 1 },
        { opcionId: 2, texto: '4 a 6', valor: 2 },
        { opcionId: 3, texto: 'mas de 6', valor: 4 },
      ],
      valorCamino: 2,
      isChangeCamino: false,
    },
    {
      id: 4,
      texto: '¿La tarea requiere ser testeada?',
      opciones: [
        { opcionId: 1, texto: 'Si', valor: 2 },
        { opcionId: 2, texto: 'No', valor: 0 },
      ],
      valorCamino: 2,
      isChangeCamino: false,
    },
    {
      id: 5,
      texto: '¿La tarea requiere ser implementada en TEST/UAT?',
      opciones: [
        { opcionId: 1, texto: 'Si', valor: 4 },
        { opcionId: 2, texto: 'No', valor: 0 },
      ],
      valorCamino: 2,
      isChangeCamino: false,
    },
    {
      id: 6,
      texto: '¿La tarea requiere ser implementada en PROD?',
      opciones: [
        { opcionId: 1, texto: 'Si', valor: 8 },
        { opcionId: 2, texto: 'No', valor: 0 },
      ],
      valorCamino: 2,
      isChangeCamino: false,
    },
    {
      id: 7,
      texto: '¿Necesita internet para realizar la tarea?',
      opciones: [
        { opcionId: 1, texto: 'Si', valor: 3 },
        { opcionId: 2, texto: 'No', valor: 4 },
      ],
      valorCamino: 2,
      isChangeCamino: true,
    },
    {
      id: 8,
      texto: '¿Cuanta velocidad necesita?',
      opciones: [
        { opcionId: 1, texto: '100mb/s', valor: 8 },
        { opcionId: 2, texto: '250mb/s', valor: 16 },
      ],
      valorCamino: 3,
      isChangeCamino: false,
    },
    {
      id: 9,
      texto: '¿Que tipo de hoja va a necesitar?',
      opciones: [
        { opcionId: 1, texto: 'A4', valor: 4 },
        { opcionId: 2, texto: 'Carta', valor: 8 },
      ],
      valorCamino: 4,
      isChangeCamino: false,
    },
  ];

  //Test de unico camino
  // private listaDePreguntas: Pregunta[] = [
  //   {
  //     id: 1,
  //     texto:
  //       '¿Esta tarea puede realizarla solo o necesita de otros equipos/personas?',
  //     opciones: [
  //       { opcionId: 1, texto: 'Puedo solo', valor: 1 },
  //       { opcionId: 2, texto: 'Necesito recursos', valor: 2 },
  //     ],
  //     valorCamino: 0,
  //     isChangeCamino: false,
  //   },
  //   {
  //     id: 2,
  //     texto: '¿Cuántos días de trabajo le demanda la tarea?',
  //     opciones: [
  //       { opcionId: 1, texto: 'Menos de 3', valor: 1 },
  //       { opcionId: 2, texto: 'De 3 a 5', valor: 4 },
  //       { opcionId: 3, texto: 'De 5 a 10', valor: 8 },
  //     ],
  //     valorCamino: 0,
  //     isChangeCamino: false,
  //   },
  //   {
  //     id: 3,
  //     texto:
  //       '¿Cuántos equipos/personas participan en el cumplimiento de la tarea?',
  //     opciones: [
  //       { opcionId: 1, texto: '2 o 3', valor: 1 },
  //       { opcionId: 2, texto: '4 a 6', valor: 2 },
  //       { opcionId: 3, texto: 'mas de 6', valor: 4 },
  //     ],
  //     valorCamino: 0,
  //     isChangeCamino: false,
  //   },
  //   {
  //     id: 4,
  //     texto: '¿La tarea requiere ser testeada?',
  //     opciones: [
  //       { opcionId: 1, texto: 'Si', valor: 2 },
  //       { opcionId: 2, texto: 'No', valor: 0 },
  //     ],
  //     valorCamino: 0,
  //     isChangeCamino: false,
  //   },
  //   {
  //     id: 5,
  //     texto: '¿La tarea requiere ser implementada en TEST/UAT?',
  //     opciones: [
  //       { opcionId: 1, texto: 'Si', valor: 4 },
  //       { opcionId: 2, texto: 'No', valor: 0 },
  //     ],
  //     valorCamino: 0,
  //     isChangeCamino: false,
  //   },
  //   {
  //     id: 6,
  //     texto: '¿La tarea requiere ser implementada en PROD?',
  //     opciones: [
  //       { opcionId: 1, texto: 'Si', valor: 8 },
  //       { opcionId: 2, texto: 'No', valor: 0 },
  //     ],
  //     valorCamino: 0,
  //     isChangeCamino: false,
  //   },
  //   {
  //     id: 7,
  //     texto: '¿Necesita internet para realizar la tarea?',
  //     opciones: [
  //       { opcionId: 1, texto: 'Si', valor: 3 },
  //       { opcionId: 2, texto: 'No', valor: 4 },
  //     ],
  //     valorCamino: 0,
  //     isChangeCamino: true,
  //   },
  // ];
  constructor() {}
  private getPreguntasByCamino(camino: number): Pregunta[] {
    const preguntas: Pregunta[] = this.listaDePreguntas.filter(
      (p) => p.valorCamino == camino
    );
    if (!preguntas) {
      throw new Error('no se encontraron preguntas');
    }
    return preguntas;
  }
  getPreguntasByIndex(index: number): Pregunta | undefined {
    const pregunta: Pregunta | undefined = this.listaDePreguntas[index];
    if (!pregunta) {
      throw new Error('no se encontro la pregunta');
    }
    return pregunta;
  }
  public getPreguntasHastaElProximoCambioDeCamino(caminoObjetivo: number) {
    console.log('static');
    console.log(this.listaDePreguntas);

    const preguntas: Pregunta[] = this.listaDePreguntas.filter(
      (p) => p.valorCamino == caminoObjetivo
    );
    console.log('return');
    console.log(preguntas);

    if (!preguntas) {
      throw new Error('no se encontraron preguntas');
    }
    return preguntas;
  }
  getFirstPreguntaByCamino(camino: number) {
    console.log('antes de pedir el primero del camino');
    console.log(this.listaDePreguntas);
    const primerPregunta = this.getPreguntasByCamino(camino)[0];
    console.log('despues de agarrar el primero del camino');
    console.log(this.listaDePreguntas);
    if (!primerPregunta) throw new Error('No se encuentra la pregunta');

    return primerPregunta;
  }
  getPreguntasAll() {
    return this.listaDePreguntas;
  }
  agregarPregunta(newPregunta: Pregunta) {
    this.listaDePreguntas.push(newPregunta);
    this.listaUpdated.emit(this.listaDePreguntas);
  }
}
