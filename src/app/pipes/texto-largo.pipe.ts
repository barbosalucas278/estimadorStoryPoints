import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargo',
})
export class TextoLargoPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let retorno: string;
    const maximo = 20;
    const minimo = 0;
    if (value.length >= maximo) {
      retorno = value.substring(minimo, maximo);
      retorno += '...';
    } else {
      retorno = value;
    }
    return retorno;
  }
}
