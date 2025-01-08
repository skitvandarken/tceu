import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

   constructor(public auth: AuthService, private router: Router) {
  
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
