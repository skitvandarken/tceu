import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criarconta',
  imports: [
    MenuComponent, TranslatePipe, RodapeComponent, RouterLink
  ],
  templateUrl: './criarconta.component.html',
  styleUrl: './criarconta.component.css'
})
export class CriarcontaComponent {

  
  useLanguage(language: string): void {
    this.translate.use(language);
}

constructor(private translate: TranslateService) {}



}
