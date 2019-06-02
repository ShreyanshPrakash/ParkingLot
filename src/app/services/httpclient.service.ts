import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor( private http: HttpClient ) { }


  getHeaderContent(){
    // pass some headers
    return this.http.get('assets/content/header.json',{
    });
  }
}
