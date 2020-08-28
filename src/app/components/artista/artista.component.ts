import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService  } from  '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  show:boolean;
artista:any={};
canciones:any=[];
  constructor(private router:ActivatedRoute,private spotify:SpotifyService) {
    this.show = true;
    this.router.params.subscribe(params=>{
      this.spotify.searchArtist(params.id).subscribe(data=>{
        this.artista=data;
        this.show=false;
      })
       this.getTopTracks(params.id);
    })
   }

  ngOnInit(): void {
  }

 getTopTracks(id:string){
   this.spotify.searchTracks(id).subscribe((data:any)=>{
     this.canciones=data.tracks;
     console.log(this.canciones)
   })
 }

}
