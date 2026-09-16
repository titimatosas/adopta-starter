import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonList,
    IonTextarea,
    IonTitle,
    IonToggle,
    IonToolbar,
  ],
})
export class DetallePage {
  perro: Perro | undefined;
  editando = false;

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService,
    private router: Router,
  ) {
    this.cargarPerro();
  }

  private cargarPerro(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.perro = this.perrosService.obtener(id);
    }
  }

  adoptar(): void {
    if (this.perro && !this.perro.adoptado) {
      this.perro.adoptado = true;
    }
  }

  iniciarEdicion(): void {
    this.editando = true;
  }

  cancelarEdicion(): void {
    this.editando = false;
    this.cargarPerro();
  }

  guardarCambios(): void {
    if (!this.perro) {
      return;
    }

    const perroActualizado: Perro = {
      ...this.perro,
      nombre: this.perro.nombre.trim(),
      raza: this.perro.raza.trim(),
      edad: this.perro.edad.trim(),
      sexo: this.perro.sexo.trim(),
      tamano: this.perro.tamano.trim(),
      descripcion: this.perro.descripcion.trim(),
      foto: this.perro.foto.trim(),
    };

    this.perrosService.actualizar(perroActualizado);
    this.perro = perroActualizado;
    this.editando = false;
  }

  confirmarEliminacion(): void {
    if (!this.perro) {
      return;
    }

    const confirmar = window.confirm(`¿Seguro que quieres eliminar a ${this.perro.nombre}?`);

    if (confirmar) {
      this.perrosService.eliminar(this.perro.id);
      this.router.navigate(['/']);
    }
  }
}
