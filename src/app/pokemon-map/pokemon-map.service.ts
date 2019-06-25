import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MapService {

  private urlTeste: string =  'https://nominatim.openstreetmap.org/reverse?format=json&lat=-23.5505&lon=-46.6333';
  private urlNominatim = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=';

  constructor(
    private http: HttpClient
  ) { }

  getLocate(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(this.urlNominatim + lat + '&lon=' + lon).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.status || 'Server Error');
  }  

}  
