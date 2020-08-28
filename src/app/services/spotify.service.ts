import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IToken } from 'src/app/models/token';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   mitoki='BQAPHjGvZ8tmPU38px6qhhejvzhscqZGEqbmXbqDNyqpqx7DLDw_AZb49XGVDKHiO-2NW3DAq-_Ubx3GMiRnYmOmU7zVB9y5klo90OXQd_IFMUhwsvgNGTRHbqKQjZuxYfN5AFcbVzs'
   private clientId = '5efc69ac11c7407d8f06d6ad171aeec9';
   private clientSecret = 'e06f35654c2949fb9785401338222abe';
   private Url: string;
   private headers: HttpHeaders;
   private body: HttpParams;
   public token: IToken;
  constructor(private http:HttpClient) { }

  getNewReleases(){
    console.log('otro token', this.token)

    const headers=new HttpHeaders({
     
      Authorization: `Bearer ${this.token?.access_token}`,
    })
return this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers});

  }

  getToken(): Observable<IToken> {
    this.Url = `https://accounts.spotify.com/api/token`;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(this.clientId + ':' + this.clientSecret)}`,
    });

    this.body = new HttpParams().set('grant_type', 'client_credentials');

    return this.http
      .post(this.Url, this.body, { headers: this.headers })
      .pipe(map((token: any) => token));
  }
  searchArtists(termino){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token?.access_token}`,
    })
return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers});

  }

  searchArtist(termino){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token?.access_token}`,
    })
return this.http.get(`https://api.spotify.com/v1/artists/${termino}`, {headers});

  }

  searchTracks(termino){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token?.access_token}`,
    })
return this.http.get(`https://api.spotify.com/v1/artists/${termino}/top-tracks?country=US`, {headers});

  }
}
