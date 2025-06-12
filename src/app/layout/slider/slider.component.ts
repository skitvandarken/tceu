import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, AfterViewInit {

  @ViewChild('promoVideo') promoVideoRef!: ElementRef<HTMLVideoElement>;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const video = this.promoVideoRef.nativeElement;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;

    // Try to force play in modern browsers
    video.play().catch((err) => {
      console.warn('Autoplay failed:', err);
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}