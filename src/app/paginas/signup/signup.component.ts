import { Component } from '@angular/core';
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
export class SignupComponent {




  partnershipForm: FormGroup;
  selectedPartnership: string = '';

      useLanguage(language: string): void {
          this.translate.use(language);
      }
      
      

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.partnershipForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9,15}$/)]],
      partnershipType: ['', Validators.required],
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
