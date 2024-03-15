import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})

export class PagesServiceService {

  private apiUrl: string = 'https://digital-services-qa.xplorer.com.ec';

  constructor( private http: HttpClient, private jwtHelper: JwtHelperService ) { }

  login(user: User){
    return this.http.post(`${this.apiUrl}/api/auth/keycloak/signin`, user)
  }

  isToken():boolean {
    const token = sessionStorage.getItem('ACCESS_TOKEN');
    if(token !== null && this.jwtHelper.isTokenExpired(token) || !sessionStorage.getItem('ACCESS_TOKEN')){
      return false;
    }
    return true;
  }
}
