import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RodapeComponent } from '../rodape/rodape.component';
import { MenuComponent } from '../menu/menu.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';




@Component({
  selector: 'app-artigo-lista',
  standalone: true,  // Ensure standalone is true if using Angular 17+
  imports: [AsyncPipe, DatePipe, NgFor, TranslatePipe, RodapeComponent, TruncatePipe, MenuComponent ],
  templateUrl: './artigo-lista.component.html',
  styleUrl: './artigo-lista.component.css'
})
export class ArtigoListaComponent {



safeContent: SafeHtml = '';

  private blogService = inject(BlogService);
  posts$ = this.blogService.getPosts(); // Fetch all posts

       constructor (private translate: TranslateService, private sanitizer: DomSanitizer) {}
        useLanguage(language: string): void {
          this.translate.use(language);
      }

ngOnInit() {
  this.posts$.subscribe(posts => {
    if (posts.length > 0) {
      this.safeContent = this.sanitizer.bypassSecurityTrustHtml(posts[0].content);
    }
  });
}
      
  
}