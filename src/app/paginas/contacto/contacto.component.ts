import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

interface Address {
  title: string;
  address: string;
  phone?: string;
}

@Component({
  selector: 'app-contacto',
  imports: [TranslatePipe, MenuComponent, RodapeComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

         useLanguage(language: string): void {
              this.translate.use(language);
          }
          
          constructor(private translate: TranslateService) {}
          selectedCountry: string = 'Angola';
  
          countries = [
            { name: 'Angola', value: '0' },
            { name: 'África do Sul', value: '1' },
            { name: 'Nigéria', value: '2' },
            { name: 'Europa', value: '3' },
            { name: 'Brasil', value: '4' },
            { name: 'EUA', value: '5' },
          ];
        
          addresses: Record<string, Address[]> = {
            'Angola': [
              {
                title: 'Sede',
                address: 'Edifício Cellwave, Via AL5 Zona, XR6B<br>Talatona, Luanda Sul, Angola',
              },
              {
                title: 'Data Center - AngoNAP Luanda',
                address: 'Avenida Pedro Castro Van Dúnem Loy<br>Talatona, Luanda Sul, Angola',
              },
              {
                title: 'Estação Sangano',
                address: 'Praia de Sangano, Município da Kissama, <br> Bengo, Angola',
              }
            ],
            'África do Sul': [
              {
                title: 'Johannesburg',
                address: 'Suite 1, The Pivot, Block E <br> 1 Montecasino Boulevard, Fourways<br> 2191 - Gauteng, South Africa',
               
              },
        
            ],
            'Nigéria': [
              {
                title: 'Lagos Headquarters',
                address: '5 Jeremiah Ugwu Street, Off Babatunde Anjous<br>Lekki Phase 1,<br>Lagos, Nigeria',
              }
            ],
            'Portugal': [
              {
                title: 'Lisboa',
                address: 'Avenida da Liberdade, 245, 5º <br> 1250-143 Lisboa, Portugal',
              }
            ],
            'Brasil': [
              {
                title: 'São Paulo',
                address: 'Rua Irmã Gabriela, 51 <br>Brooklin <br>CEP 04571-130 – São Paulo',
              },
              {
                title: 'Data Center  AngonaNAP Fortaleza',
                address: 'Avenida Trajano de Medeiros, 1851 <br> Praia do Futuro I – Fortaleza – Ce <br>CEP 04571-130 – São Paulo <br> CEP 60.182-325',
              }
            ],
            'EUA': [
              {
                title: 'Bermuda',
                address: 'Canon’s Court,22 Victoria Street, <br> HM 12, Bermuda',
              },
            
            ],
            'Europa': [
              {
                title: 'Escritório - Portugal',
                address: 'Rua da Alfândega, n.º 64, 5.º andar,<br> 9000 059 FUNCHAL <br> Madeira – Portugal',               
              },
         
            ]
          };
        
          onCountryChange(event: Event) {
            const select = event.target as HTMLSelectElement;
            this.selectedCountry = select.value;
          }
        
          getCountryAddresses(country: string): Address[] {
            return this.addresses[country] || [{
              title: 'Contact Support',
              address: 'Please contact us for address information in this country',
              phone: '+244 927 686 206'
            }];
          }

}
