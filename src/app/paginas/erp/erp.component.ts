import { Component } from '@angular/core';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { Ad2Component } from '../../layout/ad2/ad2.component';

@Component({
  selector: 'app-erp',
  imports: [RodapeComponent, MenuComponent, Ad2Component],
  templateUrl: './erp.component.html',
  styleUrl: './erp.component.css'
})
export class ErpComponent {

}
