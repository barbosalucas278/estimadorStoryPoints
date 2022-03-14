import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesosGuard } from './auth/guards/accesos.guard';
import { CreateEstimadorComponent } from './pages/create-estimador/create-estimador.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AccesosGuard],
  },
  {
    path: 'crearEstimador',
    component: CreateEstimadorComponent,
    canActivate: [AccesosGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
