import { Component, OnInit } from '@angular/core';
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
  puntosTotales: number = 0;
  hasIniciado: boolean;
  terminado: boolean;
  hasCamino: boolean;
  caminoElegido?: number;
  preguntaActiva?: Pregunta;
  siguientePreguntaId: number;
  constructor(private preguntaService: PreguntaServiceService) {
    this.hasIniciado = false;
    this.terminado = false;
    this.hasCamino = false;
    this.siguientePreguntaId = 0;
  }

  ngOnInit(): void {}
  iniciar() {
    this.hasIniciado = true;
    this.preguntaActiva = this.preguntaService.getPreguntaById(1);
  }
  onOpcionelegida($event: any) {
    if (!this.hasCamino) {
      this.hasCamino = true;
      switch ($event.opcionId) {
        case Caminos.Solo: //solo
          this.caminoElegido = Caminos.Solo;
          this.siguientePreguntaId = 2;
          break;

        case Caminos.NecesitaAyuda: //necesita ayuda
          this.caminoElegido = Caminos.NecesitaAyuda;
          this.siguientePreguntaId = 3;
          break;
      }
    } else {
      this.puntosTotales += $event.puntaje;
    }

    this.siguientePregunta();
  }

  siguientePregunta() {
    switch (this.caminoElegido) {
      case Caminos.Solo: //solo
        if (this.siguientePreguntaId == 2) {
          this.preguntaActiva = this.preguntaService.getPreguntaById(
            this.siguientePreguntaId
          );
        } else {
          this.terminar();
        }
        break;

      case Caminos.NecesitaAyuda: //necesita ayuda
        if (this.siguientePreguntaId <= 6) {
          this.preguntaActiva = this.preguntaService.getPreguntaById(
            this.siguientePreguntaId
          );
        } else {
          this.terminar();
        }
        break;
    }
    this.siguientePreguntaId++;
  }
  terminar() {
    this.terminado = true;
  }
  resetearPuntaje() {
    this.terminado = false;
    this.puntosTotales = 0;
    this.hasCamino = false;
    this.caminoElegido = undefined;
    this.siguientePreguntaId = 0;
    this.hasIniciado = false;
  }
}
