import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimadorComponent } from './componentes/estimador/estimador.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FirebaseModule } from './firebase/firebase.module';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { CreateEstimadorComponent } from './pages/create-estimador/create-estimador.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormCreatePregCaminoComponent } from './componentes/form-create-preg-camino/form-create-preg-camino.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormCreatePregPuntajeComponent } from './componentes/form-create-preg-puntaje/form-create-preg-puntaje.component';
import { ModalCreacionOpcionComponent } from './componentes/modal-creacion-opcion/modal-creacion-opcion.component';
import { PipesModule } from './pipes/pipes.module';
import { VisualizadorPrevioDePreguntasComponent } from './componentes/visualizador-previo-de-preguntas/visualizador-previo-de-preguntas.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    EstimadorComponent,
    ConsultaComponent,
    ResultadoComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    CreateEstimadorComponent,
    FormCreatePregCaminoComponent,
    FormCreatePregPuntajeComponent,
    ModalCreacionOpcionComponent,
    VisualizadorPrevioDePreguntasComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FirebaseModule,
    SocialLoginModule,
    PipesModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTreeModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '869270087625-7i8bc0bp1kh1d55i0ui6tsbciartcaoj.apps.googleusercontent.com'
            ), // your client id
          },
        ],
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
