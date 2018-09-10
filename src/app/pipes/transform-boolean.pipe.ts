import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBoolean'
})
export class TransformBooleanPipe implements PipeTransform {

  transform(value: boolean): string {
    return value === true ? 'Yes' : 'No';
  }

}
