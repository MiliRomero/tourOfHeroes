import { Injectable } from '@angular/core';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root' //indica que HeroService esta visible para la aplicacion
})
export class HeroService {

  constructor() { }

}