import { Component, OnInit } from '@angular/core';

// Con esto reibimos el termino a buscar desde navbar.component.ts
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  // Aqui se guardaran las coindcidencias de la busqueda
  heroes: any[] = [];
  termino: string;

  // Creamos una instancia para poder ocupar el ActivatedRoute
  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) { }

  ngOnInit() {
      // Recibimos el parametro con ayuda de la siguiente instruccion
      this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      // Con ayuda del servicio realizamos la busqueda
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
      });
  }

}
