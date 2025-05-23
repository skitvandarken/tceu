import { Component, inject } from '@angular/core';
import { VagaService } from '../../services/vaga.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Vaga } from '../../models/vagas.models';

declare var UIkit: any;

@Component({
  selector: 'app-vagas-listar',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './vagas-listar.component.html',
  styleUrls: ['./vagas-listar.component.css']
})
export class VagasListarComponent {
  private vagaService = inject(VagaService);
  private sanitizer = inject(DomSanitizer);
  
  vagas$ = this.vagaService.getVagas();
  selectedVaga: Vaga | null = null;

openModal(vaga: Vaga): void {
  console.log('Vaga data:', vaga);
  console.log('Responsibilities content:', vaga.content);
  this.selectedVaga = vaga;
  setTimeout(() => UIkit.modal('#vaga-modal').show(), 0);
}

  // Simplified function - just returns the raw content
  getResponsabilidades(): string {
    return this.selectedVaga?.content || '';
  }

  // Helper to safely render HTML
  getSafeContent(): SafeHtml {
    if (!this.selectedVaga?.content) {
      return this.sanitizer.bypassSecurityTrustHtml('<p>No content available</p>');
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.selectedVaga.content);
  }
}