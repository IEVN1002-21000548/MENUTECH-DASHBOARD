import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ServicioInyectarService } from '../../servicio-inyectar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-clientes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule,],
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.css'
})
export default class EditarClientesComponent implements OnInit{
  clienteId!: number;
  datillos:any
  Datos:any={};
  Cliente:any={
    id: 0, 
  }
  clienteForm!: FormGroup;  // Variable para el formulario reactivo

  constructor(private fb: FormBuilder,private ingreso: ServicioInyectarService, private router: Router,private Actroute: ActivatedRoute) { 
    // Inicializar el formulario reactivo
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      restaurante: ['', [Validators.required]],
      direccion: ['', [Validators.required]],  
      contrato: ['',],  
    });
  }

  ngOnInit(): void {
    // Obtén el ID del cliente desde la ruta
    this.Cliente.id = Number(this.Actroute.snapshot.paramMap.get('id'));
    console.log('ID del cliente:', this.Cliente.id);

    this.ingreso.verDatosCliente(this.Cliente).subscribe({
      next: (response) => {
        this.Datos = response;
        
        console.log("Datos",this.Datos)
        console.log("Respuesta del server",response);

        this.datillos = this.Datos[0];
        console.log('Datillos', this.datillos)

        this.clienteForm.patchValue(this.datillos);
      },
      error: (err) => {
        console.error('Error al agregar el cliente:', err);
        alert('Error al cargar los datos');
      }
    });

    

    
  }

  // Función que se ejecuta cuando el formulario se envía
  onSubmit(): void {
    if (confirm('¿Estás seguro de que deseas actualizar los datos del cliente?')) {

    console.log("Actualizar datos");

    // Actualizar los datos en datillos con los valores del formulario
  this.datillos = this.clienteForm.value;
  this.datillos.id = this.Cliente.id;

    //Borrar platillos del restaurante del usuario
    this.ingreso.actualizarCliente(this.datillos).subscribe({
      next: (response) => {
        console.log('Cliente actualizado')
      },
        error: (err) => {
          console.error('Error en la solicitud de borrar platillos:', err);
      },
      }); 

      this.router.navigate(['/clientes']);
      console.log('Los datos a enviar son:', this.datillos)
    }

  }

  eliminarcliente() {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?, se eliminaran los platillos y el restaurante asociados a él')) {
 
      //Borrar datos del cliente
      this.ingreso.borrarCliente(this.Cliente).subscribe({
      next: (response) => {
        console.log('Cliente borrado exitosamente')
      },
        error: (err) => {
          console.error('Error en la solicitud de borrar cliente:', err);
      },
      });

      //Borrar platillos del restaurante del usuario
      this.ingreso.borrarPlatillos(this.datillos).subscribe({
      next: (response) => {
        console.log('Platillos borrados exitosamente')
      },
        error: (err) => {
          console.error('Error en la solicitud de borrar platillos:', err);
      },
      }); 

      this.router.navigate(['/clientes']);

    console.log('Los datos a enviar son:', this.datillos)
  }

    
  }

  actualizarContrato() {
    console.log('Mensaje recibido:');
  }
  
}
