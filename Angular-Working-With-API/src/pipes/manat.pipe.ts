import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manat'
})
export class ManatPipe implements PipeTransform {

  transform(manat: number, symbol?: string): string {
    if (symbol == null || symbol == undefined) {
      symbol = "₼";
    }

    return `${manat.toFixed(2)} ${symbol}`;
  }

}
