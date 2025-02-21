import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MenuComponent } from '../../layout/menu/menu.component';
import { BeneficiosComponent } from '../../layout/beneficios/beneficios.component';
import { CategoriasComponent } from '../../layout/categorias/categorias.component';
import { AngolacablesComponent } from '../../layout/angolacables/angolacables.component';
import { ServicosComponent } from '../../layout/servicos/servicos.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { SliderComponent } from '../../layout/slider/slider.component';
import { ContactoComponent } from '../../layout/contacto/contacto.component';
import { TesteComponent } from '../../layout/teste/teste.component';
import { ParceirosComponent } from '../../layout/parceiros/parceiros.component';
import { BlogComponent } from '../../layout/blog/blog.component';

@Component({
  selector: 'app-inicio',
  imports: [MenuComponent, BlogComponent, BeneficiosComponent, CategoriasComponent, ContactoComponent, AngolacablesComponent, ServicosComponent, RodapeComponent, SliderComponent, ParceirosComponent ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  

  constructor(private auth: AuthService, private router: Router) {

  }

 ngOnInit(): void {

  const videoElement = document.getElementById('promoVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = true; // Forçar o vídeo a ser mudo
    }
   
  this.auth.isAuthenticated$.subscribe(isAutheticated => {
    if (isAutheticated) {
      this.router.navigate(['/painel']);
      console.log('Usuário Autenticado');
    } else {
      console.log('Usuário Não Autenticado');
    }
  })
 }

  login(){
    this.auth.loginWithRedirect();

  }

}
