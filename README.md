# 🐶 Adopta — proyecto base (lo armas tú)

App de **adopción de mascotas** en **Ionic + Angular standalone**. Te entrego el
**andamiaje** (rutas, el modelo de datos y unos perros de ejemplo), pero la
**lógica** y la **interfaz** están vacías: las construyes tú.

> 🧭 **Varios caminos llevan a Roma.** No hay una única solución correcta. Estas
> instrucciones son una guía; resuélvelo a tu manera.

## ✅ Lo que ya viene hecho

```
src/app/
├── app.routes.ts                 ✅ rutas: '' (galería) · 'detalle/:id' · 'nuevo'
├── services/
│   └── perros.service.ts         ✅ interface Perro + 6 perros de ejemplo
│                                  ⬅️ métodos VACÍOS (los implementas tú)
├── components/
│   └── tarjeta-perro/            ⬅️ esqueleto vacío (la armas tú)
└── pages/
    ├── galeria/                  ⬅️ vacía (la armas tú)
    ├── detalle/                  ⬅️ vacía (la armas tú)
    └── nuevo/                    ⬅️ vacía (la armas tú)
```

Cada `Perro` tiene: `id`, `nombre`, `tipo`, `raza`, `edad`, `sexo`, `tamano`,
`vacunada`, `descripcion`, `foto`, `adoptado`.

## 👉 Tu tarea

Tres piezas por construir. Cada una dice **qué** debe lograr; el **cómo** te toca investigarlo (documentación de Ionic/Angular y lo visto en clase).

### 1. El servicio — `services/perros.service.ts`
Los datos y la interface `Perro` ya están. Faltan los **cuerpos de los métodos**: uno entrega todos los perros, otro busca uno por su `id` y otro agrega uno nuevo.
Hazlos funcionar.

### 2. La tarjeta — `components/tarjeta-perro/`
Un componente que recibe un perro y **muestra su información**. Decide tú cómo se ve y qué componentes de Ionic usar.

### 3. Las 3 páginas — `pages/`
Cada una trae el esqueleto mínimo (`ion-header` + `ion-content` vacío). Dales
contenido:

- **Galería** (`pages/galeria`) — muestra **todos** los perros.
- **Detalle** (`pages/detalle`) — muestra **un** perro según la ruta.
- **Nuevo perrito** (`pages/nuevo`) — un **formulario** para registrar un perro.

### 4. Página de login y de registrarse

## 💡 Para investigar

- Cómo **inyectar** el servicio en una página (es `providedIn: 'root'`, así que todas comparten los datos).
- Cómo **recorrer** una lista en el template.
- Cómo **leer un parámetro** de la ruta (el `id`) y cómo **navegar** pasándolo.
- Cómo armar un **formulario** con enlace de dos vías (y qué módulo necesita).
- En standalone, cada componente importa **solo** lo que usa, desde `@ionic/angular/standalone`.

## ▶️ Cómo ejecutarlo

- **StackBlitz**: se levanta solo. Espera el `npm install` y listo.
- **Local**: `npm install` y luego `npm start` (`ng serve`) o `ionic serve`.

---

Proyecto **Ionic Angular standalone** (Angular 20 + Ionic 8) · **Clase 2** de
IIP323W — Tecnologías y Aplicaciones Web y Móviles · UDD.
