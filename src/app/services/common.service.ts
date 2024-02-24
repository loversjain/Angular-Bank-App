import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient : HttpClient)  { }
  appUrl = "http://localhost:8000/api"
  private authSecretKey = 'token';
 getUserInfo(): Observable<UserInfo>{
  const headers = this.getHeaders();
   return this.httpClient.get<UserInfo>(`${this.appUrl}/home`,{ headers });
 } 
 depositAmount(amount:number): Observable<any>{
  const headers = this.getHeaders();
   return this.httpClient.post<any>(`${this.appUrl}/deposit`,{amount:amount},{ headers });
 } 
 withdrawAmount(amount:number): Observable<any>{
  const headers = this.getHeaders();
   return this.httpClient.post<any>(`${this.appUrl}/withdraw`,{amount:amount},{ headers });
 } 
transferAmount(amount:number,email:string): Observable<any>{
  const headers = this.getHeaders();
   return this.httpClient.post<any>(`${this.appUrl}/transfer`,{amount,email},{ headers });
 } 

 getStatement(currentpage : any): Observable<any>{
  const headers = this.getHeaders();
  if(currentpage){
    return this.httpClient.get<any>(`${this.appUrl}/statement?page=`+currentpage,{ headers });
  }
   return this.httpClient.get<any>(`${this.appUrl}/statement`,{ headers });
 } 
 private getHeaders(): HttpHeaders {
  const authToken = sessionStorage.getItem(this.authSecretKey);
  return new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`
  });
}
}
