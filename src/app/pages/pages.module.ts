import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesServiceService } from './pages-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PagesServiceService
  ],
  exports: [
  ]
})
export class PagesModule { }
