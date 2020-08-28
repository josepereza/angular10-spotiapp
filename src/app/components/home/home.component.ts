import { Component, OnInit } from '@angular/core';
import {SpotifyService  } from  '../../services/spotify.service';
import { IToken } from 'src/app/models/token';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
public nuevasCanciones:any[]=[]
show: boolean;
  constructor(private _spotify:SpotifyService) {
    this.show=true
    this._spotify.getToken().subscribe((token: IToken) => {
      this._spotify.token = token;
      this._spotify.getNewReleases().subscribe((data:any)=>{
    
        this.nuevasCanciones=data.albums.items;
        this.show=false
      })
      console.log( this._spotify.token.access_token)
    });
   }

   ngOnInit(): void {
   
   }

   
  }


