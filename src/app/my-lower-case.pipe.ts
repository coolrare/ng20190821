import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myLowerCase'
})
export class MyLowerCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    console.log(args);
    return value.toLowerCase();
  }

}
