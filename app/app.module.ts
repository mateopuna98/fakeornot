import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FakestComponent } from './fakest/fakest.component';
import { TuthestComponent } from './tuthest/tuthest.component';
 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    FakestComponent,
    TuthestComponent
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

  hola(){
    console.log("hola")
  }
 }
