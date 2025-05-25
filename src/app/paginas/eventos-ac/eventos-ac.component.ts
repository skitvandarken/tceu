import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { EventosListarComponent } from '../../layout/eventos-listar/eventos-listar.component';
import { PaineisListarComponent } from "../../layout/paineis-listar/paineis-listar.component";

@Component({
  selector: 'app-eventos-ac',
  imports: [
    MenuComponent,
    RodapeComponent,
    EventosListarComponent,
    PaineisListarComponent
],
  templateUrl: './eventos-ac.component.html',
  styleUrl: './eventos-ac.component.css'
})
export class EventosAcComponent {

}
