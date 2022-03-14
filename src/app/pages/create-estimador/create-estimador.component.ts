import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Opcion } from 'src/app/entidades/opcion';
import { Pregunta } from 'src/app/entidades/pregunta';
import { PreguntaServiceService } from 'src/app/service/pregunta-service.service';
@Component({
  selector: 'app-create-estimador',
  templateUrl: './create-estimador.component.html',
  styleUrls: ['./create-estimador.component.scss'],
})
export class CreateEstimadorComponent implements OnInit {
  preguntas: Pregunta[];
  ultimoId: number = 0;
  ultimoCamino: number = 0;
  caminoActivo: number = 0;
  constructor(private preguntasService: PreguntaServiceService) {
    this.preguntas = [];
  }
  ngOnInit(): void {}

  agregarPreguntaCaminoEnCamino(camino: Opcion) {
    this.caminoActivo = camino.valor!;
    //this.ultimoCamino = camino.valor!;
  }
  handlerNewPregunta($event: Pregunta) {
    this.preguntas.push($event);
    this.ultimoCamino = $event.opciones![1].valor!;
    this.ultimoId = $event.id!;
    this.preguntasService.agregarPregunta($event);
  }

  agregarPreguntaPuntajeEnCamino(camino: Opcion) {
    this.caminoActivo = camino.valor!;
  }
}
