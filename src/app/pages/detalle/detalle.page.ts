import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonTitle,
    IonToolbar,
  ],
})
export class DetallePage {
  perro: Perro | undefined;

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService,
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.perro = this.perrosService.obtener(id);
    }
  }
}
