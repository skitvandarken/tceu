import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-recrutamento',
  imports: [
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './recrutamento.component.html',
  styleUrl: './recrutamento.component.css'
})
export class RecrutamentoComponent {

}
