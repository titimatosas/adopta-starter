import { Component } from '@angular/core';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';
import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonRow,
    IonTitle,
    IonToolbar,
    TarjetaPerroComponent,
  ],
})
export class GaleriaPage {
  perros: Perro[];

  constructor(private perrosService: PerrosService) {
    this.perros = this.perrosService.todas();
  }
}
