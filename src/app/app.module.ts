import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubirNoticiaComponent } from './subir-noticia/subir-noticia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';
 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SubirNoticiaComponent,
    NoticiaComponent,
    SubirImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
