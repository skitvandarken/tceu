import { Component, EventEmitter, inject, Output, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 👈 Needed for fragment detection
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
declare const UIkit: any;


import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido
import { Ad2Component } from '../../layout/ad2/ad2.component';

@Component({
  selector: 'app-cloudservices',
  imports: [

    MenuComponent,
    RodapeComponent,
    Ad2Component,

    TranslatePipe // Inserido
  ],
  templateUrl: './cloudservices.component.html',
  styleUrl: './cloudservices.component.css'
})
export class CloudservicesComponent implements AfterViewInit {

  @ViewChild('servicesTabs') servicesTabs: any;
  private switcher: any;

  @Output() tabSelected = new EventEmitter<number>();

  private translate = inject(TranslateService);
  private route = inject(ActivatedRoute); // 👈 Inject Angular route

  constructor() {
    this.translate.setDefaultLang('pt');
    this.translate.use(this.translate.currentLang || 'pt');
  }

  ngAfterViewInit(): void {
    this.switcher = UIkit.switcher('.timeline-content');

    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;

      switch (fragment) {
        case 'iaas':          // ✅ 
          this.switchTab(0);
          break;
        case 'backup':        // ✅ 
          this.switchTab(1);
          break;
        case 'storage':       // ✅ 
          this.switchTab(2);
          break;
       
      }

      // ✅ smooth scroll into view
      const target = document.getElementById(fragment);
      if (target) {
        const headerOffset = 180;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  switchTab(tabIndex: number) {
    if (this.switcher) {
      this.switcher.show(tabIndex);
    }
  }

  selectTab(tabIndex: number, event: Event) {
    event.preventDefault();
    this.tabSelected.emit(tabIndex);
    this.switchTab(tabIndex);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
