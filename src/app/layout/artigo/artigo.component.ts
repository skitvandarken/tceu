import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, DatePipe, NgIf } from '@angular/common';

import { BlogService } from '../../services/blog.service';
import { TruncatePipe } from '../../pipes/truncate.pipe';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MenuComponent } from '../menu/menu.component';
import { RodapeComponent } from "../rodape/rodape.component";



@Component({
  selector: 'app-artigo',
  imports: [RouterLink, DatePipe, TruncatePipe, NgIf, CommonModule, MenuComponent, RodapeComponent],
  templateUrl: './artigo.component.html',
  styleUrl: './artigo.component.css',

})
export class ArtigoComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private sanitizer = inject(DomSanitizer);

  post: any;
  safeContent: SafeHtml = '';

  posts$ = this.blogService.getPosts();


  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.blogService.getPostById(postId).subscribe((data) => {
        this.post = data;
        if (this.post.content) {
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
        }
      });
    }
  }
}
