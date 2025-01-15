import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PainelComponent } from './paginas/painel/painel.component';
import { SignupComponent } from './paginas/signup/signup.component';

export const routes: Routes = [
  
    {path:'',component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'painel', component: PainelComponent},
    {path: 'conta', component: SignupComponent}
];
