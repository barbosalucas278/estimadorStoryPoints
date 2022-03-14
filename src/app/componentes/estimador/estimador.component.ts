import { Component, OnInit } from '@angular/core';
import { Opcion } from 'src/app/entidades/opcion';
import { Pregunta } from 'src/app/entidades/pregunta';
import { PreguntaServiceService } from 'src/app/service/pregunta-service.service';
enum Caminos {
  Solo = 1,
  NecesitaAyuda,
}
@Component({
  selector: 'app-estimador',
  templateUrl: './estimador.component.html',
  styleUrls: ['./estimador.component.scss'],
})
export class EstimadorComponent implements OnInit {
  $hasIniciado: boolean;
  $terminado: boolean;

  puntosTotales: number = 0;
  caminoElegido?: number;
  preguntasCaminoActivo: Pregunta[];
  preguntaActiva?: Pregunta;
  siguientePreguntaId: number;
  constructor(private preguntaService: PreguntaServiceService) {
    this.$hasIniciado = false;
    this.$terminado = false;
    this.siguientePreguntaId = 0;
    this.caminoElegido = 0;
    this.preguntasCaminoActivo = [];
  }

  ngOnInit(): void {}
  iniciar() {
    const caminoInicio = 0;
    this.$hasIniciado = true;
    this.preguntaActiva =
      this.preguntaService.getFirstPreguntaByCamino(caminoInicio);
    this.preguntasCaminoActivo =
      this.preguntaService.getPreguntasHastaElProximoCambioDeCamino(
        caminoInicio
      );
  }
  onCaminoIsChanged($event: Opcion) {
    try {
      this.caminoElegido = $event.valor;
      this.siguientePreguntaCaminoChanged();
    } catch (error) {
      this.terminar();
    }
  }
  onOpcionElegida($event: Opcion) {
    try {
      this.puntosTotales += $event.valor!;
      this.siguientePreguntaCamino();
    } catch (error) {
      console.log(error);

      this.terminar();
    }
  }

  siguientePreguntaCamino() {
    console.log(this.siguientePreguntaId + 'antes');
    this.siguientePreguntaId = this.preguntaActiva!.id! + 1;

    this.preguntaActiva = this.preguntasCaminoActivo.find(
      (p) => p.id == this.siguientePreguntaId
    );
    console.log(this.siguientePreguntaId + 'despeus');
    if (!this.preguntaActiva) {
      this.terminar();
    }
  }
  siguientePreguntaCaminoChanged() {
    this.preguntasCaminoActivo = [];
    this.preguntasCaminoActivo =
      this.preguntaService.getPreguntasHastaElProximoCambioDeCamino(
        this.caminoElegido!
      );
    this.preguntaActiva = this.preguntasCaminoActivo[0];
    this.siguientePreguntaId = this.preguntaActiva!.id! + 1;
  }
  terminar() {
    this.$terminado = true;
  }
  resetearPuntaje() {
    this.$terminado = false;
    this.puntosTotales = 0;
    this.caminoElegido = 0;
    this.siguientePreguntaId = 0;
    this.$hasIniciado = false;
  }
}
