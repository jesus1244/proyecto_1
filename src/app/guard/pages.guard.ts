import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PagesServiceService } from '../pages/pages-service.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate {

  constructor( private router: Router, private pagesService: PagesServiceService ) {}

    canActivate():boolean{
        
        if(!this.pagesService.isToken()){
            console.log("Token no es valido o expiró");
            this.router.navigate(['login']);
            return false;
        }
        
        return true;
    }
  
}