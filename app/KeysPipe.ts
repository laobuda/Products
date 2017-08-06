import {Pipe, PipeTransform} from '@angular/core';
import {Product} from './productIntf';

@Pipe({name: 'KeysPipe'})
export class KeysPipe implements PipeTransform {
  transform(value:JSON) : JSON {
    let keys:any = [];
    console.log(value);
    for (let key in value) {
      console.log("In the Pipe " + key + "  --------  ");
      
      keys.push({key: key, value: value[key]});
  }
    return keys;
  }
}