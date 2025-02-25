import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { CarrosselComponent } from '../../layout/carrossel/carrossel.component';

@Component({
  selector: 'app-datacenter',
  imports: [

    MenuComponent,
    RodapeComponent,
    CarrosselComponent
  ],
  templateUrl: './datacenter.component.html',
  styleUrl: './datacenter.component.css'
})
export class DatacenterComponent {

}
