import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicioInyectarService } from '../../servicio-inyectar.service';

@Component({
  selector: 'app-agregar-platillos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './agregar-platillos.component.html',
  styleUrl: './agregar-platillos.component.css'
})
export default class AgregarPlatillosComponent implements OnInit{
  clienteForm!: FormGroup;  // Variable para el formulario reactivo
  restaurantes:any={};

  constructor(private fb: FormBuilder,private ingreso: ServicioInyectarService, private router: Router,) { }

  ngOnInit(): void {
    // Inicializar el formulario reactivo
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      restaurante: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      ingredientes: ['', [Validators.required]],
      inf_nutricional: ['', [Validators.required]],
      imagen : ' '
    });

    // Llamar al servicio para obtener datos del cliente, y sacar los restaurantes.
    this.ingreso.obtenerClientes().subscribe({
      next: (response) => {
        this.restaurantes = response;
        console.log('Datos obtenidos :', this.restaurantes);
      },
      error: (err) => {
        console.error('Error al agregar el platillo:', err);
      }
    });
  }

  // Función que se ejecuta cuando el formulario se envía
  onSubmit(): void {
    if (this.clienteForm.invalid) {
      return;  // Evitar enviar si el formulario no es válido
    }

    

    // Llamar al servicio para agregar el cliente
    this.ingreso.addPlatillo(this.clienteForm.value).subscribe({
      next: (response) => {
        console.log(this.clienteForm.value)
        console.log('platillo agregado exitosamente', response);
        alert('Platillo agregado exitosamente');
      },
      error: (err) => {
        console.error('Error al agregar el platillo:', err);
        alert('Error al agregar el platillo');
      }
    });
    this.router.navigate(['/platillos']);
  }

}
