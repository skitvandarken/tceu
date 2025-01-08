import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0} from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAuth0({
      domain: 'fluxodigital.uk.auth0.com',
      clientId: 'XSLsJ37AhPS4GWpMgXAGHjbpyvIQ4AFx',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),]
};
