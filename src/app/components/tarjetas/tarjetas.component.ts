import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
@Input() items:any[]=[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
verArtista(dato){
let artistaId;
if (dato.type=='artist'){
  artistaId=dato.id
}else {
  artistaId=dato.artists[0].id
}
this.router.navigate(['/artist', artistaId])
}
}
