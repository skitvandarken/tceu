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
  selector: 'app-cloudservices',
  imports: [
    MenuComponent,
    RodapeComponent,
    Ad2Component,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './cloudservices.component.html',
  styleUrl: './cloudservices.component.css'
})
export class CloudservicesComponent   implements AfterViewInit, OnDestroy {
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
    // Delay ensures UIkit elements are rendered
    setTimeout(() => {
      this.switcher = UIkit.switcher('.component-nav');

      // Watch for URL fragment changes
      this.fragmentSub = this.route.fragment.subscribe((fragment) => {
        if (fragment) this.scrollAndSwitch(fragment);
      });

      // Handle direct access (URL already has a fragment)
      const currentFragment = this.route.snapshot.fragment;
      if (currentFragment) {
        this.scrollAndSwitch(currentFragment);
      } else {
        // Default highlight for first item
        this.updateActiveNav(0);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.fragmentSub?.unsubscribe();
  }

  /** Scroll and switch based on URL fragment */
  private scrollAndSwitch(fragment: string): void {
    const map: Record<string, number> = {
      cloud: 0,
      backup: 1,
      storage: 2,
      kubernetes: 3,
      vm: 4,

    };

    const tabIndex = map[fragment];
    if (tabIndex !== undefined && this.switcher) {
      this.switchTab(tabIndex);
    }

    const target = document.getElementById(fragment);
    if (target) {
      const headerOffset = 160; // adjust for your sticky header height
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  /** Switch UIkit tab and sync active menu state */
  private switchTab(tabIndex: number): void {
    if (this.switcher) {
      this.switcher.show(tabIndex);
      this.updateActiveNav(tabIndex);
    }
  }

  /** Highlight correct sidebar item */
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

  /** Called when user clicks a tab manually */
  selectTab(tabIndex: number, event: Event): void {
    event.preventDefault();
    this.tabSelected.emit(tabIndex);
    this.switchTab(tabIndex);
  }

  /** Change language */
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
