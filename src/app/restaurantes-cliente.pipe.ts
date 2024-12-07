import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantesCliente',
  standalone: true
})
export class RestaurantesClientePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
