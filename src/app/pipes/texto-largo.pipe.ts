import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargo',
})
export class TextoLargoPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let retorno;
    const maximo = 10;
    const minimo = 0;
    if (value.length > maximo) {
      retorno = value.substring(minimo, maximo);
      retorno?.concat('...');
    } else {
      retorno = value;
    }
    return retorno;
  }
}
