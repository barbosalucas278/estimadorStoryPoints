import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Opcion } from 'src/app/entidades/opcion';
import { Pregunta } from 'src/app/entidades/pregunta';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent implements OnInit {
  @Input() pregunta?: Pregunta;
  @Output() opcionPuntajeElegidaEvent: EventEmitter<Opcion> =
    new EventEmitter<Opcion>();
  @Output() caminoIsChangedEvent: EventEmitter<Opcion> =
    new EventEmitter<Opcion>();
  constructor() {}

  ngOnInit(): void {}
  opcionElegida(opcion: Opcion) {
    if (this.pregunta?.isChangeCamino) {
      this.caminoIsChangedEvent.emit(opcion);
    } else {
      this.opcionPuntajeElegidaEvent.emit(opcion);
    }
  }
}
