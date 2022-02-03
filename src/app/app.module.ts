import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimadorComponent } from './componentes/estimador/estimador.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
@NgModule({
  declarations: [AppComponent, EstimadorComponent, ConsultaComponent, ResultadoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
