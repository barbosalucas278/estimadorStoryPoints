import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Opcion } from 'src/app/entidades/opcion';
import { Pregunta } from 'src/app/entidades/pregunta';

@Component({
  selector: 'app-form-create-preg-puntaje',
  templateUrl: './form-create-preg-puntaje.component.html',
  styleUrls: ['./form-create-preg-puntaje.component.scss'],
})
export class FormCreatePregPuntajeComponent implements OnInit, OnChanges {
  @Output() creacionTerminadaEvent = new EventEmitter<Pregunta>();
  @Input() ultimoId?: number;
  @Input() caminoActivo?: number;
  @Input() preguntaParaEditar?: Pregunta;
  newPreguntaPuntaje?: Pregunta;
  mensajeDeError: string = '';
  showError: boolean = false;
  form: FormGroup;
  opcionActiva: Opcion;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      texto: ['', Validators.required],
    });
    this.opcionActiva = {};
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.inicializarPregunta();
  }
  inicializarPregunta() {
    if (this.preguntaParaEditar) {
      this.newPreguntaPuntaje = { ...this.preguntaParaEditar };
      this.form.controls['texto'].setValue(this.newPreguntaPuntaje.texto);
    } else {
      const id = this.ultimoId! + 1;

      this.newPreguntaPuntaje = {
        id: id,
        texto: '',
        opciones: [
          { opcionId: 1, valor: 0 },
          { opcionId: 2, valor: 0 },
        ],
        isChangeCamino: false,
        valorCamino: this.caminoActivo!,
      };
    }
  }

  ngOnInit(): void {}

  agregarOpcion() {
    if (this.newPreguntaPuntaje?.opciones?.length! < 4) {
      const ultimoIndice = this.newPreguntaPuntaje!.opciones!.length - 1;
      const ultimoIdDeOpciones =
        this.newPreguntaPuntaje!.opciones![ultimoIndice].opcionId;

      this.newPreguntaPuntaje!.opciones!.push({
        opcionId: ultimoIdDeOpciones! + 1,
        texto: '',
        valor: 0,
      });
    }
  }
  quitarUltimaOpcion() {
    const cantidadDeOpciones = this.newPreguntaPuntaje!.opciones!.length;
    if (cantidadDeOpciones > 2) {
      this.newPreguntaPuntaje!.opciones!.pop();
    } else {
      this.mostrarError('Debe haber como mínimo 2 opciones');
    }
  }
  finalizar() {
    const texto = this.form.controls['texto'].value;
    this.newPreguntaPuntaje!.texto = texto;
    this.form.reset();
    this.creacionTerminadaEvent.emit(this.newPreguntaPuntaje);
  }
  mostrarError(mensaje: string) {
    this.mensajeDeError = mensaje;
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 3000);
  }
  mostrarModalOpcion(opcion: Opcion) {
    this.opcionActiva! = opcion;
  }
  handlerNuevaOpcionCreada($event: Opcion) {
    for (
      let index = 0;
      index < this.newPreguntaPuntaje!.opciones!.length;
      index++
    ) {
      const opcion = this.newPreguntaPuntaje!.opciones![index];
      if (opcion.opcionId == $event.opcionId) {
        opcion.texto = $event.texto;
        opcion.valor = $event.valor;
      }
    }
    this.opcionActiva = {};
  }
}
