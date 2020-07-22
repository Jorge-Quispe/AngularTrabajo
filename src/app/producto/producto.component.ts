import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] =[
    {id : 1, nomproducto : 'silla', cantidad : 34 , precio : 53},
    {id : 2, nomproducto : 'mesa', cantidad : 234 , precio : 153},
    {id : 3, nomproducto : 'casilleros', cantidad : 134 , precio : 523},
  
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
