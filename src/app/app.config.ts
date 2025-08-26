import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { provideAuth0 } from "@auth0/auth0-angular";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from "./app.routes";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { TranslateLoader, provideTranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, "./i18n/", ".json");

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled', // This makes the page scroll to top on navigation
                anchorScrolling: 'enabled' // Optional: enables anchor scrolling
            })
        ),
        provideHttpClient(),
        provideTranslateService({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        provideAuth0({
            domain: 'dev-w75eqy38x7tfovk2.us.auth0.com',
            clientId: 'QCtjjr4fUToPkTlXblQJvaAQb1rkLrTh',
            authorizationParams: {
                redirect_uri: window.location.origin
            },
        }),
        provideFirebaseApp(() => initializeApp({
            apiKey: "AIzaSyBMBs9qU1vDwl4hYYFgd1tJk3rYSZ2qdnE",
            authDomain: "acsa-458213.firebaseapp.com",
            projectId: "acsa-458213",
            storageBucket: "acsa-458213.firebasestorage.app",
            messagingSenderId: "363516187651",
            appId: "1:363516187651:web:a5241923f5ecd265dbaa36"
        })),
        provideFirestore(() => getFirestore())
    ],
};