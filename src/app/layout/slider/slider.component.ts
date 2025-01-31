import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  imports: [RouterLink, CommonModule, TranslatePipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {


  
  useLanguage(language: string): void {
    this.translate.use(language);
}

constructor(private translate: TranslateService) {}

}
