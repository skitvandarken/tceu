import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-conectividade',
  imports: [
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './conectividade.component.html',
  styleUrl: './conectividade.component.css'
})
export class ConectividadeComponent {

}
