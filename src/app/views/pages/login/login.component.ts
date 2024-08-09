import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { AuthService } from '../../../../services/authentication';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle, FormsModule]
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  onLogin(form: NgForm): void {
    if (form.valid) {
      const { email, password } = form.value;
      this.authService.authenticate(email, password).subscribe(
        (success) => {
          if (success) {
            console.log('Login successful');
          } else {
            console.log('Login failed');
          }
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
  }
}
