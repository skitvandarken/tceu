import { Component } from '@angular/core';
import { Ad2Component } from '../../layout/ad2/ad2.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-seguranca',
  imports: [Ad2Component, MenuComponent, RodapeComponent],
  templateUrl: './seguranca.component.html',
  styleUrl: './seguranca.component.css'
})
export class SegurancaComponent {

}
