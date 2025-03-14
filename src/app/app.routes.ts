import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PainelComponent } from './paginas/painel/painel.component';
import { SignupComponent } from './paginas/signup/signup.component';
import { CriarcontaComponent } from './paginas/criarconta/criarconta.component';
import { IndicadorComponent } from './paginas/indicador/indicador.component';
import { AgenteComponent } from './paginas/agente/agente.component';
import { RevendedorComponent } from './paginas/revendedor/revendedor.component';
import { DatacenterComponent } from './paginas/datacenter/datacenter.component';
import { Angonap2Component } from './paginas/angonap2/angonap2.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { EventosComponent } from './layout/eventos/eventos.component';
import { EventosAcComponent } from './paginas/eventos-ac/eventos-ac.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ArtigoComponent } from './templates/artigo/artigo.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { ConectividadeComponent } from './paginas/conectividade/conectividade.component';
import { CloudservicesComponent } from './paginas/cloudservices/cloudservices.component';
import { DatacentersevicesComponent } from './paginas/datacentersevices/datacentersevices.component';
import { SegurancaComponent } from './paginas/seguranca/seguranca.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { RecrutamentoComponent } from './paginas/recrutamento/recrutamento.component';
import { VirtualizacaoComponent } from './paginas/virtualizacao/virtualizacao.component';

export const routes: Routes = [
  
    {path:'',component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'acerca', component: AcercaComponent},

    {path: 'painel', component: PainelComponent},
    {path: 'conta', component: SignupComponent},
    {path: 'criar', component: CriarcontaComponent},
    {path: 'indicador', component:IndicadorComponent},
    {path: 'agente', component: AgenteComponent},
    {path: 'revendedor', component: RevendedorComponent},
    {path: 'datacenter', component: DatacenterComponent},
    {path: 'angonap2', component: Angonap2Component},
    {path:'eventos', component: EventosAcComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'artigo', component: ArtigoComponent},
    {path: 'servicos', component: ServicosComponent},
    {path: 'conectividade', component: ConectividadeComponent},
    {path: 'cloud', component: CloudservicesComponent},
    {path: 'data-center', component: DatacentersevicesComponent},
    {path: 'seguranca', component: SegurancaComponent},
    {path: 'noticias', component: NoticiasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'recrutamento', component: RecrutamentoComponent},
    {path: 'datacenter', component: DatacentersevicesComponent},
    {path: 'virtualizacao', component: VirtualizacaoComponent}
];
