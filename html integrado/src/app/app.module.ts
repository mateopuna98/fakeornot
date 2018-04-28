import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubirNoticiaComponent } from './subir-noticia/subir-noticia.component';
import { NoticiaComponent } from './noticia/noticia.component';
 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SubirNoticiaComponent,
    NoticiaComponent
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
