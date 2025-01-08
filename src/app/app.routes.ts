import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PainelComponent } from './paginas/painel/painel.component';

export const routes: Routes = [
  
    {path:'', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'painel', component: PainelComponent},
];
