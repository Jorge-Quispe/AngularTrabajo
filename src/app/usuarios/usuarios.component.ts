import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios: Usuario[] =[
  {id : 1, nomuser : 'Roxana', clave : '69'},
  {id : 2, nomuser : 'Robert', clave : '619'},
  {id : 3, nomuser : 'Ramon', clave : '69444'},

] 

  constructor() { }

  ngOnInit(): void {
  }

}
