import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'

})




export class MenuComponent implements OnInit {



  useLanguage(language: string): void {
    this.translate.use(language);
}

   constructor(public auth: AuthService, private router: Router, private  translate: TranslateService) {

    
  
    }
  
   ngOnInit(): void {
     
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

    logout(){ 
      this.auth.logout();
    }
  

}
