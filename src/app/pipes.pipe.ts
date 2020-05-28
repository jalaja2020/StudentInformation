import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StringConcat',
  pure: true
})
export class PipesPipe implements PipeTransform {

  transform(value: String): unknown {
    return `DNA0${value}`;
  }

}
