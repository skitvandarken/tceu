import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {


  
    useLanguage(language: string): void {
      this.translate.use(language);
  }
  
  constructor(private translate: TranslateService) {}
  
  

}
