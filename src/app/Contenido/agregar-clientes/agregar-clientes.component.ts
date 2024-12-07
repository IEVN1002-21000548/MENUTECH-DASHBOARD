import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicioInyectarService } from '../../servicio-inyectar.service';

@Component({
  selector: 'app-agregar-clientes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './agregar-clientes.component.html',
  styleUrl: './agregar-clientes.component.css'
})
export default class AgregarClientesComponent implements OnInit{
  clienteForm!: FormGroup;  // Variable para el formulario reactivo

  constructor(private fb: FormBuilder,private ingreso: ServicioInyectarService, private router: Router,) { }

  ngOnInit(): void {
    // Inicializar el formulario reactivo
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      restaurante: ['', [Validators.required]],
      direccion: ['', [Validators.required]],  
      //imagen: ['', [Validators.required]],  
    });
  }

  // Función que se ejecuta cuando el formulario se envía
  onSubmit(): void {
    if (this.clienteForm.invalid) {
      return;  // Evitar enviar si el formulario no es válido
    }

    // Llamar al servicio para agregar el cliente
    this.ingreso.addCliente(this.clienteForm.value).subscribe({
      next: (response) => {
        console.log(this.clienteForm.value)
        console.log('Cliente agregado exitosamente', response);
        alert('Cliente agregado exitosamente');
      },
      error: (err) => {
        console.error('Error al agregar el cliente:', err);
        alert('Error al agregar el cliente');
      }
    });

    this.router.navigate(['/clientes']);
  }

}
