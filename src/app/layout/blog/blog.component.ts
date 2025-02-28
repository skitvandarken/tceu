import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';



@Component({
  selector: 'app-blog',
  imports: [
    TranslatePipe
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
