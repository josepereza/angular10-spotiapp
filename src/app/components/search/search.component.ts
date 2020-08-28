import { Component, OnInit } from '@angular/core';
import {SpotifyService  } from  '../../services/spotify.service';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  show:boolean;
artistas:any[]=[];
  constructor(private spotify:SpotifyService) { 
    
  }

  ngOnInit(): void {
  }
buscar(termino){
  this.show = true;
  console.log(termino);
  this.spotify.searchArtists(termino).
  pipe((map((data:any)=>data.artists.items))).subscribe(data=>{
    this.artistas=data;
    this.show=false;
  })
 }
}

