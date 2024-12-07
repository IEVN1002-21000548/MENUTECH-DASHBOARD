import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ServicioInyectarService } from '../../servicio-inyectar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-restaurante',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './vista-restaurante.component.html',
  styleUrl: './vista-restaurante.component.css'
})
export default class VistaRestauranteComponent implements OnInit{
  // Recuperar el objeto desde localStorage
  Cliente:any={};
  Platillos:any={};

  constructor(private fb: FormBuilder,private ingreso: ServicioInyectarService, private router: Router,private Actroute: ActivatedRoute) {}

  ngOnInit() {    
      // Obtén el ID del cliente desde la ruta
    this.Cliente.restaurante = String(this.Actroute.snapshot.paramMap.get('id'));
    console.log('Nombre del restaurante:', this.Cliente.restaurante);

    this.ingreso.obtenerplatosCliente(this.Cliente).subscribe({
      next: (response) => {
        this.Platillos = response;
        console.log('Platillos del cliente', this.Platillos);
      },
      error: (err) => {
        console.error('Error en la solicitud:', err);
      }
    });

  }

  enviar(id: number) {
    this.router.navigate(['/editarplatillo', id]);
  }
}
