import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export interface Usuario {
  correo: string;
  clave: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuarios: Usuario[] = [];
  private usuarioActual: Usuario | null = null;

  registrar(correo: string, clave: string): boolean {
    const correoNormalizado = correo.trim().toLowerCase();

    if (this.usuarios.some((usuario) => usuario.correo === correoNormalizado)) {
      return false;
    }

    this.usuarios.push({ correo: correoNormalizado, clave });
    return true;
  }

  iniciarSesion(correo: string, clave: string): boolean {
    const usuario = this.usuarios.find(
      (usuarioRegistrado) =>
        usuarioRegistrado.correo === correo.trim().toLowerCase() &&
        usuarioRegistrado.clave === clave,
    );

    this.usuarioActual = usuario ?? null;
    return usuario !== undefined;
  }

  cerrarSesion(): void {
    this.usuarioActual = null;
  }

  estaAutenticado(): boolean {
    return this.usuarioActual !== null;
  }
}

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.estaAutenticado() ? true : router.createUrlTree(['/login']);
};