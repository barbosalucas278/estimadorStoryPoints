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
  ultimoId: number = 9; //cambiar a 0
  ultimoCamino: number = 0;
  caminoActivo: number = 0;
  preguntaPuntajeParaEditarActiva?: Pregunta;
  preguntaCaminoParaEditarActiva?: Pregunta;
  constructor(private preguntasService: PreguntaServiceService) {}
  ngOnInit(): void {}

  agregarPreguntaCaminoEnCamino(camino: number) {
    this.caminoActivo = camino;
  }
  handlerNewPregunta($event: Pregunta) {
    if (
      this.preguntaCaminoParaEditarActiva ||
      this.preguntaPuntajeParaEditarActiva
    ) {
      this.preguntasService.modifyPregunta($event);
      this.preguntaCaminoParaEditarActiva = undefined;
      this.preguntaPuntajeParaEditarActiva = undefined;
    } else {
      if ($event.isChangeCamino) {
        this.ultimoCamino = $event.opciones![1].valor!;
      }
      this.ultimoId = $event.id!;
      this.preguntasService.agregarPregunta($event);
    }
  }

  agregarPreguntaPuntajeEnCamino(camino: number) {
    this.caminoActivo = camino;
  }
  /**
   *
   * @param $event Id de la pregunta a editar
   */
  editarPreguntaCamino($event: number) {
    this.preguntaCaminoParaEditarActiva =
      this.preguntasService.getPreguntasById($event);
  }
  /**
   *
   * @param $event Id de la pregunta a editar
   */
  editarPreguntaPuntaje($event: number) {
    this.preguntaPuntajeParaEditarActiva =
      this.preguntasService.getPreguntasById($event);
  }
}
