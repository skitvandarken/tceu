import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import { provideAuth0 } from "@auth0/auth0-angular";

import {routes} from "./app.routes";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {TranslateLoader, provideTranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, "./i18n/", ".json");

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideHttpClient(),
        provideTranslateService({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        provideAuth0({
            domain: 'fluxodigital.uk.auth0.com',
            clientId: 'XSLsJ37AhPS4GWpMgXAGHjbpyvIQ4AFx',
            authorizationParams: {
              redirect_uri: window.location.origin
            },
        }),
    ]
};
