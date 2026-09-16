import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
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
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonBackButton,
    IonButton,
    IonButtons,
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
export class RegistroPage {
  correo = '';
  clave = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  registrar(): void {
    this.error = '';

    if (!this.authService.registrar(this.correo, this.clave)) {
      this.error = 'Ya existe una cuenta con ese correo.';
      return;
    }

    this.router.navigate(['/login']);
  }
}