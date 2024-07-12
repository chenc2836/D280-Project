import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  countryData(countryID: string): Observable<any> {
    const address = `https://api.worldbank.org/v2/country/${countryID}?format=json`;
    return this.http.get<any>(address);
  }
}
