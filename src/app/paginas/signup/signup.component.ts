import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  imports: [MenuComponent, CommonModule, ReactiveFormsModule, RodapeComponent, TranslatePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  translations: any;

  ngOnInit() {
    this.translate.get([
      'registro_parceiro_titulo',
      'primeiro_nome',
      'ultimo_nome',
      'seu_email',
      'telefone',
      'escolha_parceria',
      'indicadores_negocio_form',
      'agentes_vendas_form',
      'revendedor_titulo_form',
      'indicador_detalhes',
      'indicador_subsidiaria',
      'nome_potencial_cliente',
      'numero_colaboradores',
      'confirmar_informacoes',
      'consultar_termos',
      'solicitar'
    ]).subscribe((res: any) => {
      this.translations = res;
    });
  }



  partnershipForm: FormGroup;
  selectedPartnership: string = '';

      useLanguage(language: string): void {
          this.translate.use(language);
          this.translations.use(language);
      }
      
      

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.partnershipForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9,15}$/)]],
      potCliente: ['', Validators.required],
      numColab: ['', Validators.required],
      numeroColaboradores: ['', Validators.required],
      receitaAnual: ['', Validators.required],
      volVendas: ['', Validators.required],
      subsidiariaEscolhida: ['', Validators.required],
      partnershipType: ['', Validators.required],
      paisForm: ['', Validators.required],
      tipoEmpresa: ['', Validators.required],
      nomeEmpresa: ['', Validators.required],
      equipaVendas: ['', Validators.required],
      servicoInteress: ['', Validators.required],
      anosOperacoes: ['', Validators.required],
      businessIndicatorDetails: this.fb.group({
        referralCount: [''],
        keyIndustries: ['']
      }),
      authorizedAgentDetails: this.fb.group({
        region: [''],
        experienceYears: ['']
      }),
      resellerDetails: this.fb.group({
        storeName: [''],
        productSpecialty: ['']
      })
    });

    this.partnershipForm.get('partnershipType')?.valueChanges.subscribe(value => {
      this.selectedPartnership = value;
    });
  }

  submitForm() {
    if (this.partnershipForm.valid) {
      console.log('Form Submitted:', this.partnershipForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
