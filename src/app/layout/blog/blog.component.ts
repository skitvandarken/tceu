import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuComponent } from '../menu/menu.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-blog',
  imports: [
    TranslatePipe,
    MenuComponent,
    RodapeComponent,
    RouterLink
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  
     constructor (private translate: TranslateService) {}
      useLanguage(language: string): void {
        this.translate.use(language);
    }
    

}
