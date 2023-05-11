import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { NavesComponent } from './Componentes/naves/naves.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { SesionComponent } from './Componentes/sesion/sesion.component';
import { NaveComponent } from './Componentes/nave/nave.component';
import { ControlComponent } from './Componentes/control/control.component';
import { PassComponent } from './Componentes/pass/pass.component';
import { MailComponent } from './Componentes/mail/mail.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SliderComponent } from './Componentes/slider/slider.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'starships', component: NavesComponent, canActivateChild: [AuthGuard] },
  { path: 'starship', component: NaveComponent },
  { path: 'sign-in', component: SesionComponent },
  { path: 'register-user', component: RegistroComponent },
  { path: 'control', component: ControlComponent },
  { path: 'forgot-password', component: PassComponent },
  { path: 'verify-email-address', component: MailComponent },
  { path: 'starships/:id', component: NaveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'control', component: ControlComponent },
  { path: 'slider', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
