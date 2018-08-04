import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return [];
    }


    const mapped = value.map((data, key) => {
      return {
        key: key,
        value: data
      };
    });

    return mapped;
  }

}
