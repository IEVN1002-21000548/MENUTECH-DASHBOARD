import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServicioInyectarService } from '../../servicio-inyectar.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-restaurantes',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, FormsModule],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css'
})
export default class RestaurantesComponent implements OnInit{

  clientes:any={};

  clientes2 = []; // Tu lista de clientes
  searchTerm: string = ''; // Propiedad para el término de búsqueda

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

    verPlatillos(restaurante: string) {
      this.router.navigate(['/vistarestaurante', restaurante]);
    }
    
    // Método para filtrar clientes
   filteredClientes() {
    return this.clientes.filter((cliente: { nombre: string; }) => 
      cliente.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } 

}