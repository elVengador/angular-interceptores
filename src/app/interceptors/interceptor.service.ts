import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //creamos el token
    // headers: 
    const headers = new HttpHeaders({
      'token-personalizado':'ASASFD3SFD365SDQ1'
    })

    // params: como let para poder agregar mas parametros
    let params = new HttpParams().append('page','1')
    params = params.append('nombre','jimy')

    
    // clonamos el req y agregamos lo que queremos
    const reqClone = req.clone({
      headers,params
    })
    
    // continuamos con la ejecucion de nuestra request, pero ya con los datos inyectados
    return next.handle(reqClone)
      .pipe( catchError( this.manejarError ) )
  }

  manejarError(error:HttpErrorResponse){
    console.warn(error);
    return throwError('Error personalizado')
  }
}
