import { Component, OnInit } from '@angular/core';
// Este import nos ayuda para redireccionar cuando se busca algun heroe
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor( private router: Router ) { }

  ngOnInit() {
  }


  buscarHeroe(termino: string) {
    // console.log(termino);
    // Pasamos el temrino a buscar y hacia donde queremos que nos redireccione
    this.router.navigate(['/buscar', termino]);
  }

}
