import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  estado: boolean;
  textoPrueba = 'Antes del click';
  icono = 'thumb_down';

  constructor() {
    this.estado = true;
  }

  cambioClass() {
    if (this.estado === true) {
      this.estado = false;
      this.textoPrueba = 'Despues del click';
      this.icono = 'thumb_up';
    } else {
      this.textoPrueba = 'Antes del click';
      this.icono = 'thumb_down';
      this.estado = true;
    }
  }
}
