import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SignupComponent } from './paginas/signup/signup.component';
import { IndicadorComponent } from './paginas/indicador/indicador.component';
import { AgenteComponent } from './paginas/agente/agente.component';
import { DatacenterComponent } from './paginas/datacenter/datacenter.component';
import { Angonap2Component } from './paginas/angonap2/angonap2.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { EventosComponent } from './layout/eventos/eventos.component';
import { EventosAcComponent } from './paginas/eventos-ac/eventos-ac.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ArtigoComponent } from './templates/artigo/artigo.component';
import { ConectividadeComponent } from './paginas/conectividade/conectividade.component';
import { CloudservicesComponent } from './paginas/cloudservices/cloudservices.component';
import { DatacentersevicesComponent } from './paginas/datacentersevices/datacentersevices.component';
import { SegurancaComponent } from './paginas/seguranca/seguranca.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { RecrutamentoComponent } from './paginas/recrutamento/recrutamento.component';
import { VirtualizacaoComponent } from './paginas/virtualizacao/virtualizacao.component';
import { ErpComponent } from './paginas/erp/erp.component';
import { TrustCenterComponent } from './paginas/trust-center/trust-center.component';

import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ServiceFormComponent } from './layout/service-form/service-form.component';
import { PrivacypolicyComponent } from './paginas/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './paginas/termsandconditions/termsandconditions.component';


export const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'company', component: AcercaComponent },

  { path: 'conta', component: SignupComponent },
  { path: 'indicador', component: IndicadorComponent },
  { path: 'agente', component: AgenteComponent },
  { path: 'datacenter', component: DatacenterComponent },
  { path: 'angonap2', component: Angonap2Component },
  { path: 'eventos', component: EventosAcComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'artigo', component: ArtigoComponent },
  { path: 'connectivity', component: ConectividadeComponent },
  { path: 'cloud', component: CloudservicesComponent },
  { path: 'data-center', component: DatacentersevicesComponent },
  { path: 'security', component: SegurancaComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'recrutamento', component: RecrutamentoComponent },
  { path: 'datacenter', component: DatacentersevicesComponent },
  { path: 'virtualizacao', component: VirtualizacaoComponent },
  { path: 'erp', component: ErpComponent },
  { path: 'trust-center', component: TrustCenterComponent },

  
  { path: 'service-contact', component: ServiceFormComponent},


  { path: 'mkt-proibido', component: DashboardComponent },

  { path: 'privacypolicy', component: PrivacypolicyComponent},
  { path: 'termsandconditions', component: TermsandconditionsComponent },




  {
    path: 'solution',
    loadComponent: () => import('./layout/artigo-lista/artigo-lista.component').then(m => m.ArtigoListaComponent)
  },

    {
    path: 'news',
    loadComponent: () => import('./paginas/noticias/noticias.component').then(m => m.NoticiasComponent)
  },
  {
    path: 'solution/:id',
    loadComponent: () => import('./layout/artigo/artigo.component').then(m => m.ArtigoComponent)
  },

  {
    path: 'postar',
    loadComponent: () => import('./layout/artigo-postar/artigo-postar.component').then(m => m.ArtigoPostarComponent)
  },

  {
    path: 'postar-vaga',
    loadComponent: () => import('./layout/vagas-criar/vagas-criar.component').then(m => m.VagasCriarComponent)
  },




];
