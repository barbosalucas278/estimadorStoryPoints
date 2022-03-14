import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajeDeAlertaComponent } from 'src/app/componentes-genericos/mensaje-de-alerta/mensaje-de-alerta.component';
import { Pregunta } from 'src/app/entidades/pregunta';

@Component({
  selector: 'app-form-create-preg-camino',
  templateUrl: './form-create-preg-camino.component.html',
  styleUrls: ['./form-create-preg-camino.component.scss'],
})
export class FormCreatePregCaminoComponent implements OnInit, OnChanges {
  @Output() creacionTerminadaEvent = new EventEmitter<Pregunta>();
  @Input() ultimoId?: number;
  @Input() ultimoCamino?: number;
  @Input() caminoActivo?: number;

  form: FormGroup;
  newPreguntaCamino?: Pregunta;
  mensajeDeError: string = '';
  showError: boolean = false;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      texto: ['', Validators.required],
      camino1: ['', Validators.required],
      camino2: ['', Validators.required],
    });
    this.inicializarPregunta();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    this.inicializarPregunta();
  }

  ngOnInit(): void {}
  inicializarPregunta() {
    this.newPreguntaCamino = {
      id: this.ultimoId! + 1,
      texto: '',
      opciones: [
        { opcionId: 1, texto: '', valor: this.ultimoCamino! + 1 },
        { opcionId: 2, texto: '', valor: this.ultimoCamino! + 2 },
      ],
      isChangeCamino: true,
      valorCamino: this.caminoActivo,
    };
  }

  finalizar() {
    const { texto, camino1, camino2 } = this.form.value;
    this.newPreguntaCamino!.texto = texto;
    this.newPreguntaCamino!.opciones![0].texto = camino1;
    this.newPreguntaCamino!.opciones![1].texto = camino2;
    if (this.form.valid) {
      this.creacionTerminadaEvent.emit(this.newPreguntaCamino);
      this.form.reset();
    }
  }
  mostrarError(mensaje: string) {
    this.mensajeDeError = mensaje;
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 3000);
  }
}
