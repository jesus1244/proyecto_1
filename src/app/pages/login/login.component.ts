import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ErrorStateMatcher } from '@angular/material/core';
import { PagesServiceService } from '../pages-service.service';
import { User } from '../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor( private service: PagesServiceService, private router: Router ) { }

  emailFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  user = {
    password: "",
    user: "",
    username: ""
  }

  login(){
    let user: User = {
      username: this.user.username,
      password: this.user.password
    }

    this.service.login(user).subscribe( (data: any) => {
      
      sessionStorage.setItem(`ACCESS_TOKEN`, data.data.access_token);

      this.router.navigateByUrl("/home");

    })
  }
}
