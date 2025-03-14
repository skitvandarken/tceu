import { Component } from '@angular/core';
import { TelcablesComponent } from '../../layout/telcables/telcables.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-acerca',
  imports: [

    MenuComponent,
    TelcablesComponent, RodapeComponent
  ],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {

}
