import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  //selectedHero?: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) {} //lo pasa como parametro y a la vez lo declara

  ngOnInit() {
    this.getHeroes();
  }

  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  } //ya no esta en uso 
*/

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  } //el this trae el valor de la variable que le estas pasando, en este caso, "this.heroes" trea el valor de la propiedad heroes
  //Observable.subscribe()hace que getHeroes se quede esperando hasta que le llegue el observable para recien ahi emitir el array de heroes
}
