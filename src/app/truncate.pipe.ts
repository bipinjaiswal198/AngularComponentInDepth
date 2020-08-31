import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let limit = args[0];
    if (typeof value === "string" && typeof limit === "number") {
      return value.length > limit ? value.substring(0, limit) + "..." : value; 
    }

  }

}
