import { NestedTreeControl } from '@angular/cdk/tree';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Opcion } from 'src/app/entidades/opcion';
import { Pregunta } from 'src/app/entidades/pregunta';
import { PreguntaServiceService } from 'src/app/service/pregunta-service.service';
interface CaminoNode {
  id: number;
  camino: number;
  name: string;
  children?: CaminoNode[];
  isChangeCamino?: boolean;
}

// const TREE_DATA: CaminoNode[] = [
//   {
//     name: 'Fruit',
//     children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
//       },
//       {
//         name: 'Orange',
//         children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
//       },
//     ],
//   },
// ];

@Component({
  selector: 'app-visualizador-previo-de-preguntas',
  templateUrl: './visualizador-previo-de-preguntas.component.html',
  styleUrls: ['./visualizador-previo-de-preguntas.component.scss'],
})
export class VisualizadorPrevioDePreguntasComponent
  implements OnInit, OnChanges
{
  treeControl = new NestedTreeControl<CaminoNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<CaminoNode>();
  @Output() creacionPreguntaCamino: EventEmitter<Opcion> = new EventEmitter();
  @Output() creacionPreguntaPuntaje: EventEmitter<Opcion> = new EventEmitter();
  // @Input() preguntas: Pregunta[] = [];
  preguntas: Pregunta[] = [];
  constructor(private preguntasService: PreguntaServiceService) {
    this.preguntas = preguntasService.getPreguntasAll();
    this.dataSource.data = this.procesarPreguntas();
    this.preguntasService.listaUpdated.subscribe((listaDePreguntas) => {
      this.preguntas = listaDePreguntas;
      this.dataSource.data = this.procesarPreguntas();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.preguntas);
  }
  hasChild = (_: number, node: CaminoNode) =>
    !!node.children && node.children.length > 0;
  ngOnInit(): void {}
  handlerPreguntaCamino(opcion: Opcion) {
    this.creacionPreguntaCamino.emit(opcion);
  }
  handlerPreguntaPuntaje(opcion: Opcion) {
    this.creacionPreguntaPuntaje.emit(opcion);
  }
  tienePreguntaCamino(camino: number): boolean {
    let ret: boolean = false;
    this.preguntas.forEach((p) => {
      if (p.valorCamino == camino && p.isChangeCamino) {
        ret = true;
      }
    });
    return ret;
  }
  procesarPreguntas() {
    let caminoNode: CaminoNode[] = [];

    this.preguntas.forEach((pregunta) => {
      if (pregunta.isChangeCamino && pregunta.id == 1) {
        let caminos: CaminoNode[] = [];
        pregunta.opciones!.forEach((opcion) => {
          let preguntasDelCamino: CaminoNode[] = [];
          this.preguntas.forEach((preguntaLoop) => {
            if (preguntaLoop.valorCamino == opcion.valor) {
              if (!preguntaLoop.isChangeCamino) {
                preguntasDelCamino.push({
                  name: preguntaLoop.texto!,
                  id: preguntaLoop.id!,
                  camino: preguntaLoop.valorCamino!,
                  isChangeCamino: preguntaLoop.isChangeCamino!,
                });
              } else {
                let preguntaCaminoDentroDeUnCamino = this.preguntas.find(
                  (x) => x.valorCamino == opcion.valor
                );
                let preguntasDelCaminoAnidado: CaminoNode[] = [];
                this.preguntas.forEach((p) => {
                  if (p.valorCamino == opcion.valor) {
                    preguntasDelCaminoAnidado.push({
                      name: p.texto!,
                      id: p.id!,
                      camino: p.valorCamino!,
                      isChangeCamino: p.isChangeCamino!,
                    });
                  }
                });
                preguntasDelCamino.push({
                  name: preguntaCaminoDentroDeUnCamino?.texto!,
                  id: preguntaCaminoDentroDeUnCamino?.id!,
                  children: [...preguntasDelCaminoAnidado],
                  camino: preguntaCaminoDentroDeUnCamino?.valorCamino!,
                  isChangeCamino:
                    preguntaCaminoDentroDeUnCamino?.isChangeCamino!,
                });
              }
            }
          });
          caminos.push({
            name: opcion.texto!,
            id: opcion.opcionId!,
            children: [...preguntasDelCamino],
            camino: opcion.valor!,
          });
        });
        caminoNode.push({
          name: pregunta.texto!,
          id: pregunta.id!,
          children: [...caminos],
          camino: pregunta.valorCamino!,
          isChangeCamino: pregunta.isChangeCamino!,
        });
      }
    });
    console.log(caminoNode);

    return caminoNode;
  }
}
