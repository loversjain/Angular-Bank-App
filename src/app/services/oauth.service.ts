import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInModel } from '../models/signIn.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private httpClient : HttpClient)  { }
   appUrl = "http://localhost:8000/api"
  singIn(model :SignInModel): Observable<any>{
    return this.httpClient.post<any>(`${this.appUrl}/login`,model);
  } 
}
