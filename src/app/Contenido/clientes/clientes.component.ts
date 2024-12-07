import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServicioInyectarService } from '../../servicio-inyectar.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export default class ClientesComponent implements OnInit{
  clientes:any={};

  constructor (private servicio: ServicioInyectarService,
                private router: Router,
  ){}

  ngOnInit() {    
      
    //Obtener datos restaurante y direccion
    this.servicio.obtenerClientes().subscribe({
      next: (response) => {
        this.clientes = response;
        console.log('Datos de Clientes', this.clientes);
        },
        error: (err) => {
          console.error('Error en la solicitud:', err);
      },
      });

    }

    enviar(id: number) {
      this.router.navigate(['/editarcliente', id]);
    }
    

}
