import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Componentes propios para las ENRUTACIONES
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

//Configuracion de routes.
const appRouting: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRouting);
