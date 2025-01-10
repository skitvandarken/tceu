import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MenuComponent } from '../../layout/menu/menu.component';


@Component({
  selector: 'app-painel',
  imports: [CommonModule, MenuComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {

  user: any;

  constructor(public auth: AuthService) {}
  }



