import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoLargoPipe } from './texto-largo.pipe';

@NgModule({
  declarations: [TextoLargoPipe],
  imports: [CommonModule],
  exports: [TextoLargoPipe],
})
export class PipesModule {}
