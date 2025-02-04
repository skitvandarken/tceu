import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PainelComponent } from './paginas/painel/painel.component';
import { SignupComponent } from './paginas/signup/signup.component';
import { CriarcontaComponent } from './paginas/criarconta/criarconta.component';
import { IndicadorComponent } from './paginas/indicador/indicador.component';
import { AgenteComponent } from './paginas/agente/agente.component';
import { RevendedorComponent } from './paginas/revendedor/revendedor.component';

export const routes: Routes = [
  
    {path:'',component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'painel', component: PainelComponent},
    {path: 'conta', component: SignupComponent},
    {path: 'criar', component: CriarcontaComponent},
    {path: 'indicador', component:IndicadorComponent},
    {path: 'agente', component: AgenteComponent},
    {path: 'revendedor', component: RevendedorComponent}
];
