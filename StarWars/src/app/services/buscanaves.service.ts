import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship } from '../interfaces/starship';


@Injectable({ providedIn: 'root' })
export class BuscanavesService {
  constructor(
    private http: HttpClient
  ){
  
  }
  getAllStarships(page:number):Observable<Starship>{
    const path = `https://swapi.dev/api/starships/?page=${page}`;
    return this.http.get<Starship>(path);
    }
  
  getStarship(id:string):Observable<Starship>{
    const path = `https://swapi.dev/api/starships/${id}`;
    return this.http.get<Starship>(path);
  
  }
  
  
  
  }