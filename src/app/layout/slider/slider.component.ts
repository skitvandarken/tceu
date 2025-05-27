import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  imports: [ CommonModule, ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  ngOnInit() {
    this.el.nativeElement.muted = true;
  }
  
  useLanguage(language: string): void {
    this.translate.use(language);
}

constructor(private translate: TranslateService, private el: ElementRef<HTMLVideoElement>) {}

}
