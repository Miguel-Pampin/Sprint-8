import { HeaderComponent } from './Componentes/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavesComponent } from './Componentes/naves/naves.component';
import { HomeComponent } from './Componentes/home/home.component';
import { SesionComponent } from './Componentes/sesion/sesion.component';
import { BuscanavesService } from './services/buscanaves.service';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { NaveComponent } from './Componentes/nave/nave.component';
import { IdPipe } from './pipes/id.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { environment } from 'src/enviroments/enviromen.prod';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MailComponent } from './Componentes/mail/mail.component';
import { AuthService } from './shared/services/auth.service';
import { PassComponent } from './Componentes/pass/pass.component';
import { ControlComponent } from './Componentes/control/control.component';
import { SliderComponent } from './Componentes/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NaveComponent,
    NavesComponent,
    MenuComponent,
    RegistroComponent,
    SesionComponent,
    PassComponent,
    IdPipe,
    MailComponent,
    ControlComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [BuscanavesService, HttpClient, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
