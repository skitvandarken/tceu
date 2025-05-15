import { Component } from '@angular/core';
import { ArtigoPostarComponent } from '../../layout/artigo-postar/artigo-postar.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ArtigoListaComponent } from '../../layout/artigo-lista/artigo-lista.component';

@Component({
  selector: 'app-dashboard',
  imports: [ArtigoPostarComponent,MenuComponent, ArtigoListaComponent, TranslatePipe ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

           useLanguage(language: string): void {
                this.translate.use(language);
            }
            
            constructor(private translate: TranslateService) {}
            selectedCountry: string = 'Angola';

}
