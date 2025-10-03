import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NumerosComponent } from '../numeros/numeros.component';
import { ContadorComponent } from '../contador/contador.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, NumerosComponent, ContadorComponent, RouterLink],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('promoVideo') promoVideoRef!: ElementRef<HTMLVideoElement>;

  constructor(private translate: TranslateService) {}

  ngAfterViewInit(): void {
    const video = this.promoVideoRef.nativeElement;
    
    // Ensure video plays even if autoplay is blocked
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Autoplay was prevented - show fallback or try again
        video.muted = true;
        video.play().catch(e => console.warn('Video play failed:', e));
      });
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}