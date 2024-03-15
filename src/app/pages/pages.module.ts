import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesServiceService } from './pages-service.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PagesServiceService,
    JwtHelperService
  ],
  exports: [
  ]
})
export class PagesModule { }
