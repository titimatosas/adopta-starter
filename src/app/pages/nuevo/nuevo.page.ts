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
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
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
    IonTextarea,
    IonTitle,
    IonToolbar,
  ],
})
export class NuevoPage {
  nombre = '';
  edad = '';
  raza = '';
  descripcion = '';
  foto = '';

  constructor(
    private perrosService: PerrosService,
    private router: Router,
  ) {}

  guardar(): void {
    const nuevoPerro: Perro = {
      id: Date.now(),
      nombre: this.nombre.trim(),
      edad: this.edad.trim(),
      raza: this.raza.trim(),
      descripcion: this.descripcion.trim(),
      tipo: 'Perro',
      sexo: 'No especificado',
      tamano: 'No especificado',
      vacunada: false,
      foto: 'https://placedog.net/600/600',
      adoptado: false,
    };

    this.perrosService.agregar(nuevoPerro);
    this.router.navigate(['/']);
  }
}
