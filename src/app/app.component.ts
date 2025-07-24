import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, 
})
export class AppComponent {
  title = 'tcng';
  

  

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en','pt']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');


  
}
    
  
}
