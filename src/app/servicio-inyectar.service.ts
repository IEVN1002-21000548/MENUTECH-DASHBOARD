import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioInyectarService {

  constructor(private http:HttpClient) { }

  public verUsuario(orden: any) {
    return this.http.post('http://127.0.0.1:5000/verificar_usuario', orden, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public verDatosCliente(orden: any) {
    console.log("datos enviados al servidor:", orden)
    return this.http.post('http://127.0.0.1:5000/datoscliente', orden, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public obtenerClientes() {
    console.log("Obteniendo los clientes.")
    return this.http.get('http://127.0.0.1:5000/clientes', {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public obtenerPlatillos() {
    console.log("Obteniendo los platillos.")
    return this.http.get('http://127.0.0.1:5000/platillos', {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public obtenerplatosCliente(platos:any) {
    console.log("Obteniendo los Platos del cliente.", platos)
    return this.http.post('http://127.0.0.1:5000/platoscliente', platos,{
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public addCliente(cliente :any) {
    console.log("Añadiendo cliente.", cliente )
    return this.http.post('http://127.0.0.1:5000/clientes', cliente ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public addUsuario(cliente :any) {
    console.log("Añadiendo usuario", cliente )
    return this.http.post('http://127.0.0.1:5000/usuarios', cliente ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public addPlatillo(platillo :any) {
    console.log("Añadiendo platillo", platillo )
    return this.http.post('http://127.0.0.1:5000/platillos', platillo ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public borrarCliente(cliente :any) {
    console.log("Borrando Cliente", cliente )
    return this.http.post('http://127.0.0.1:5000/clientesborrar', cliente ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
  public borrarUsuario(cliente :any) {
    console.log("Borrando Usuario", cliente )
    return this.http.post('http://127.0.0.1:5000/usuariosborrar', cliente ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
  public borrarPlatillos(cliente :any) {
    console.log("Borrando platillos", cliente )
    return this.http.post('http://127.0.0.1:5000/platillosborrar', cliente ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
  public borrarPlatillo(cliente :any) {
    console.log("Borrando platillo", cliente )
    return this.http.post('http://127.0.0.1:5000/borrarplatillo', cliente ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
  public actualizarCliente(cliente :any) {
    console.log("Actualizando Cliente", cliente )
    return this.http.post('http://127.0.0.1:5000/actualizarcliente', cliente ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
  public actualizarPlatillo(platillo :any) {
    console.log("Actualizando Platillo", platillo )
    return this.http.post('http://127.0.0.1:5000/actualizarplatillo', platillo ,{
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public verDatosPlatillo(orden: any) {
    console.log("datos enviados al servidor:", orden)
    return this.http.post('http://127.0.0.1:5000/datosplatillo', orden, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
}
