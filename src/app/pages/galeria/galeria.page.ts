import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
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
    FormsModule,
    IonCol,
    IonGrid,
    IonHeader,
    IonContent,
    IonLabel,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    TarjetaPerroComponent,
  ],
})
export class GaleriaPage {
  perros: Perro[];
  filtro = 'todos';

  constructor(
    private perrosService: PerrosService,
    private router: Router,
  ) {
    this.perros = this.perrosService.todas();
  }

  irANuevo(): void {
    this.router.navigate(['/nuevo']);
  }
}
