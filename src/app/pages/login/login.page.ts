import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonList,
    IonText,
    IonTitle,
    IonToolbar,
  ],
})
export class LoginPage {
  correo = '';
  clave = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  entrar(): void {
    this.error = '';

    if (this.authService.iniciarSesion(this.correo, this.clave)) {
      this.router.navigate(['/']);
      return;
    }

    this.error = 'El correo o la clave no son correctos.';
  }

  irARegistro(): void {
    this.router.navigate(['/registro']);
  }
}