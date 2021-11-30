import { Injectable } from '@angular/core';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { episodiosI } from '../../modelos/episodios.interface'
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url: string = 'https://rickandmortyapi.com/api/'
  constructor(private http:HttpClient) { }

  //getEpisodios(pagne:number):Observable<episodiosI[]>{
  // let direccion = this.url + "episode" +
  //  return
  //}

  getEpisodios(pagina: number): Observable<episodiosI[]>{
    let direccion = this.url + "episode?page=" + pagina;
    return this.http.get<episodiosI[]>(direccion);
  }

  
}
