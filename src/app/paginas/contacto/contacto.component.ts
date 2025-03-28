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
            { name: 'Portugal', value: '3' },
            { name: 'Brasil', value: '4' },
            { name: 'EUA', value: '5' },
            { name: 'Europa (TelCables Europa)', value: '6' }
          ];
        
          addresses: Record<string, Address[]> = {
            'Angola': [
              {
                title: 'Sede',
                address: 'Edifício Cellwave, Via AL5 Zona, XR6B<br>Talatona, Luanda Sul, Angola',
                phone: '+244 927 686 206'
              },
              {
                title: 'Data Center - AngoNap Luanda',
                address: 'Avenida Pedro Castro Van Dúnem Loy<br>Talatona, Luanda Sul, Angola'
              }
            ],
            'África do Sul': [
              {
                title: 'Johannesburg Office',
                address: 'The Business Park, 2nd Floor<br>15 Lower Road, Morningside<br>Johannesburg, 2057, South Africa',
                phone: '+27 11 234 5678'
              },
              {
                title: 'Cape Town Office',
                address: 'The Towers, 5th Floor<br>25 Bree Street<br>Cape Town, 8001, South Africa'
              }
            ],
            'Nigéria': [
              {
                title: 'Lagos Headquarters',
                address: '5 Jeremiah Ugwu Street, Off Babatunde Anjous<br>Lekki Phase 1,<br>Lagos, Nigeria',
              }
            ],
            'Portugal': [
              {
                title: 'Lisbon Office',
                address: 'Avenida da Liberdade, 245, 5º<br>1250-143 Lisboa, Portugal',
                phone: '+351 21 123 4567'
              }
            ],
            'Brasil': [
              {
                title: 'São Paulo Office',
                address: 'Rua Irmã Gabriela, 51 <br>Brooklin <br>CEP 04571-130 – São Paulo',
                phone: '+55 11 2345-6789'
              },
              {
                title: 'Data Center',
                address: 'Avenida Trajano de Medeiros, 1851 <br>Praia do Futuro I – Fortaleza – Ce <br>CEP 04571-130 – São Paulo <br> CEP 60.182-325',
                phone: '+55 11 2345-6789',
              }
            ],
            'EUA': [
              {
                title: 'Bermuda',
                address: 'Canon’s Court,22 Victoria Street, HamiltonSA',
                phone: '+1 212 123 4567'
              },
            
            ],
            'Europa (TelCables Europa)': [
              {
                title: 'Amsterdam Office',
                address: 'Kingsfordweg 43<br>1043 GP Amsterdam, Netherlands',
                phone: '+31 20 123 4567'
              },
              {
                title: 'Frankfurt Office',
                address: 'MesseTurm, Friedrich-Ebert-Anlage 49<br>60327 Frankfurt am Main, Germany'
              }
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
