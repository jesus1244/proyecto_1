import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})

export class PagesServiceService {

  private apiUrl: string = 'http://localhost:8080';

  constructor( private http: HttpClient ) { }

  login(user: User){
    return this.http.post(`${this.apiUrl}/api/auth/keycloak/signin`, user)
  }
}
