import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { VagasListarComponent } from '../../layout/vagas-listar/vagas-listar.component';

@Component({
  selector: 'app-recrutamento',
  imports: [
    MenuComponent,
    RodapeComponent,
    VagasListarComponent
  ],
  templateUrl: './recrutamento.component.html',
  styleUrl: './recrutamento.component.css'
})
export class RecrutamentoComponent {

}
