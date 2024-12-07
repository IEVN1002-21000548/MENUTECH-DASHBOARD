import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServicioInyectarService } from '../../servicio-inyectar.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-platillos',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './platillos.component.html',
  styleUrl: './platillos.component.css'
})
export default class PlatillosComponent implements OnInit {
  platillos:any={};

  constructor (private servicio: ServicioInyectarService,
                private router: Router,
  ){}

  ngOnInit() {    
      
    //Obtener datos restaurante y direccion
    this.servicio.obtenerPlatillos().subscribe({
      next: (response) => {
        this.platillos = response;
        console.log('Datos de platillos', this.platillos);
        },
        error: (err) => {
          console.error('Error en la solicitud:', err);
      },
      });

    }

    enviar(id: number) {
      this.router.navigate(['/editarplatillo', id]);
    }
    
}
