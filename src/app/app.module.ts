import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FirebaseModule, SocialLoginModule],
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
