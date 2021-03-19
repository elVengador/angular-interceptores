import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  obtenerUsuario(){
    
    return this.http.get('https://reqres.in/api/users',)
      .pipe(
        map(resp=> resp['data']))
  }

}
