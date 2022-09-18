import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCard'
})
export class TitleCardPipe implements PipeTransform {

  transform(value: string, lastCharacter: number): string {
    
    return value.length >= lastCharacter ? `${value.substring(0, lastCharacter - 3)}...` : value;
  }

}
