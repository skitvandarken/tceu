import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-blog',
  imports: [TranslatePipe, MenuComponent, RouterLink, RodapeComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

      useLanguage(language: string): void {
        this.translate.use(language);
    }
    
    constructor(private translate: TranslateService) {}
    

}
