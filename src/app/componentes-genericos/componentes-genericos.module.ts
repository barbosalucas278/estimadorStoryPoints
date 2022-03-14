import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { MensajeDeAlertaComponent } from './mensaje-de-alerta/mensaje-de-alerta.component';

@NgModule({
  declarations: [SpinnerComponent, MensajeDeAlertaComponent],
  exports: [SpinnerComponent, MensajeDeAlertaComponent],
  imports: [CommonModule],
})
export class ComponentesGenericosModule {}
