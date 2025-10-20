import {
  Component,
  EventEmitter,
  inject,
  Output,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { Ad2Component } from '../../layout/ad2/ad2.component';
import { Subscription } from 'rxjs';

declare const UIkit: any;

@Component({
  selector: 'app-seguranca',
  imports: [
    MenuComponent,
    RodapeComponent,
    TranslatePipe,
    Ad2Component,
    RouterLink,
  ],
  templateUrl: './seguranca.component.html',
  styleUrls: ['./seguranca.component.css'],
})
export class SegurancaComponent implements AfterViewInit, OnDestroy {
  @ViewChild('servicesTabs') servicesTabs: any;
  @Output() tabSelected = new EventEmitter<number>();

  private translate = inject(TranslateService);
  private route = inject(ActivatedRoute);

  private switcher: any;
  private fragmentSub?: Subscription;

  constructor() {
    this.translate.setDefaultLang('pt');
    this.translate.use(this.translate.currentLang || 'pt');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.switcher = UIkit.switcher('.component-nav');

      this.fragmentSub = this.route.fragment.subscribe((fragment) => {
        if (fragment) this.scrollAndSwitch(fragment);
      });

      const currentFragment = this.route.snapshot.fragment;
      if (currentFragment) {
        this.scrollAndSwitch(currentFragment);
      } else {
        this.updateActiveNav(0);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.fragmentSub?.unsubscribe();
  }

  private scrollAndSwitch(fragment: string): void {
    const map: Record<string, number> = {
      antiddos: 0,
      firewall: 1,
    };

    const tabIndex = map[fragment];
    if (tabIndex !== undefined && this.switcher) {
      this.switchTab(tabIndex);
    }

    const target = document.getElementById(fragment);
    if (target) {
      const headerOffset = 160;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  private switchTab(tabIndex: number): void {
    if (this.switcher) {
      this.switcher.show(tabIndex);
      this.updateActiveNav(tabIndex);
    }
  }

  private updateActiveNav(tabIndex: number): void {
    const navItems = document.querySelectorAll('.component-nav li');
    navItems.forEach((li, index) => {
      if (index === tabIndex) {
        li.classList.add('uk-active');
        li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        li.classList.remove('uk-active');
      }
    });
  }

  selectTab(tabIndex: number, event: Event): void {
    event.preventDefault();
    this.tabSelected.emit(tabIndex);
    this.switchTab(tabIndex);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
