import { Component, OnInit } from '@angular/core';

// Importamos el servicios creado en la carpeta servicios
import { HeroesService, Heroe } from '../../servicios/heroes.service';

// Propiedad necesaria para redirrecionar al usuario mediante un boton
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  // Accedemos al servicio
  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService, private router: Router ) { 
    console.log('Constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
