import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { FakestComponent } from './fakest/fakest.component';
import { SubirNoticiaComponent } from './subir-noticia/subir-noticia.component';
import{NoticiaComponent} from './noticia/noticia.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'email', component: EmailComponent},
    {path: 'home', component: HomeComponent},
    {path: 'fakest', component: FakestComponent},
    {path: 'upload', component: SubirNoticiaComponent},
    {path: 'noticia',component: NoticiaComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignupComponent, EmailComponent, HomeComponent, FakestComponent, 
    SubirNoticiaComponent, NoticiaComponent]
