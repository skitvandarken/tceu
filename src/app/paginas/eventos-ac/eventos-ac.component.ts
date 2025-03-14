import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-eventos-ac',
  imports: [
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './eventos-ac.component.html',
  styleUrl: './eventos-ac.component.css'
})
export class EventosAcComponent {

}
