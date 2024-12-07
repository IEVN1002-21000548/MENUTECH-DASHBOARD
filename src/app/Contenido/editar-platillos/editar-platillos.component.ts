import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ServicioInyectarService } from '../../servicio-inyectar.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-platillos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule,],
  templateUrl: './editar-platillos.component.html',
  styleUrl: './editar-platillos.component.css'
})
export default class EditarPlatillosComponent implements OnInit{
  clienteId!: number;
  datillos:any
  Datos:any={};
  restaurantes:any={};
  Cliente:any={
    id: 0, 
  }
  clienteForm!: FormGroup;  // Variable para el formulario reactivo

  constructor(private fb: FormBuilder,private ingreso: ServicioInyectarService, private router: Router,private Actroute: ActivatedRoute) { 
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
  }

  ngOnInit(): void {
    // Obtén el ID del cliente desde la ruta
    this.Cliente.id = Number(this.Actroute.snapshot.paramMap.get('id'));
    console.log('ID del cliente:', this.Cliente.id);

    this.ingreso.verDatosPlatillo(this.Cliente).subscribe({
      next: (response) => {
        this.Datos = response;
        
        console.log("Datos",this.Datos)
        console.log("Respuesta del server",response);

        this.datillos = this.Datos[0];
        console.log('Datillos del platillo', this.datillos)

        this.clienteForm.patchValue(this.datillos);
      },
      error: (err) => {
        console.error('Error al agregar el cliente:', err);
        alert('Error al cargar los datos');
      }
    });

    // Llamar al servicio para obtener datos del cliente, y sacar los restaurantes.
    this.ingreso.obtenerClientes().subscribe({
      next: (response) => {
        this.restaurantes = response;
        console.log('Datos obtenidos :', this.restaurantes);
      },
      error: (err) => {
        console.error('Error al obtener el platillo:', err);
      }
    });

    
  }

  // Función que se ejecuta cuando el formulario se envía
  onSubmit(): void {
    if (confirm('¿Estás seguro de que deseas actualizar los datos del platillo?')) {

    console.log("Actualizar datos");

    // Actualizar los datos en datillos con los valores del formulario
    this.datillos = this.clienteForm.value;
    this.datillos.id = this.Cliente.id;

    //Borrar platillos del restaurante del usuario
    this.ingreso.actualizarPlatillo(this.datillos).subscribe({
      next: (response) => {
        console.log('Platillo actualizado')
      },
        error: (err) => {
          console.error('Error en la solicitud de actualizar platillos:', err);
          console.log('Los datos a enviar son:', this.datillos)
      },
      }); 

      this.router.navigate(['/platillos']);
      console.log('Los datos a enviar son:', this.datillos)
    }

  }

  eliminarplatillo() {
    if (confirm('¿Estás seguro de que deseas eliminar este platillo?')) {
 
      //Borrar datos del platillo
      this.ingreso.borrarPlatillo(this.Cliente).subscribe({
      next: (response) => {
        console.log('platillo borrado exitosamente')
      },
        error: (err) => {
          console.error('Error en la solicitud de borrar platillo:', err);
      },
      });

      this.router.navigate(['/platillos']);

    console.log('Los datos a enviar son:', this.datillos)
  }

    
  }

  actualizarContrato() {
    console.log('Mensaje recibido:');
  }
  
  
}
