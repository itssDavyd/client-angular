import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModel} from "@angular/forms";

//Es la libreria que permite conectarte con las peticiones al backend de API-LARAVEL
import {HttpClientModule} from "@angular/common/http";

//COMPONENTES.
import {AppComponent} from './app.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DefaultComponent} from "./components/default/default.component";
import { CarNewComponent } from './components/car-new/car-new.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

//ROUTING
import {routing, appRoutingProviders} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    CarNewComponent,
    CarEditComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
