import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { Ad2Component } from '../../layout/ad2/ad2.component';

@Component({
  selector: 'app-virtualizacao',
  imports: [MenuComponent, RodapeComponent, Ad2Component],
  templateUrl: './virtualizacao.component.html',
  styleUrl: './virtualizacao.component.css'
})
export class VirtualizacaoComponent {

}
