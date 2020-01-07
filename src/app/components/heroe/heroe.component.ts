import { Component } from '@angular/core';

// Para guardar el id que esta en la direccion url de cada heroe
import { ActivatedRoute } from '@angular/router';


import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) { 

    // Obtenemos el id
    this.activatedRoute.params.subscribe( params => {
      // console.log(params[ 'id' ]);
      this.heroe = this._heroesService.getHeore( params['id'] );
      console.log(this.heroe);
    });
  }
}
