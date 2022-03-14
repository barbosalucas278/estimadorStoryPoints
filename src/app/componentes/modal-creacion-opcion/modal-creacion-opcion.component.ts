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

@Component({
  selector: 'app-modal-creacion-opcion',
  templateUrl: './modal-creacion-opcion.component.html',
  styleUrls: ['./modal-creacion-opcion.component.scss'],
})
export class ModalCreacionOpcionComponent implements OnInit, OnChanges {
  @Output() creacionTerminadaEvent: EventEmitter<Opcion> = new EventEmitter();
  @Input() opcionIn: Opcion;
  newOpcion: Opcion;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.opcionIn = {};
    this.newOpcion = {};
    this.form = fb.group({
      texto: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(2),
        ],
      ],
      puntaje: ['', Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.form.controls['texto'].setValue(this.opcionIn.texto);
    this.form.controls['puntaje'].setValue(this.opcionIn.valor);
    this.form.get('texto')!.updateValueAndValidity();
    this.form.get('puntaje')!.updateValueAndValidity();
  }

  ngOnInit(): void {}
  aumentarPuntaje() {
    this.opcionIn!.valor! += 1;
    this.form.controls['puntaje'].setValue(this.opcionIn!.valor!);
  }
  disminuirPuntaje() {
    if (this.opcionIn!.valor! > 0) {
      this.opcionIn!.valor! -= 1;
      this.form.controls['puntaje'].setValue(this.opcionIn!.valor!);
    }
  }
  finalizarCreacion() {
    this.newOpcion.opcionId = this.opcionIn?.opcionId;
    this.newOpcion.texto = this.form.controls['texto'].value;
    this.newOpcion.valor = this.opcionIn!.valor!;
    this.creacionTerminadaEvent.emit(this.newOpcion);
    this.form.reset();
  }
}
