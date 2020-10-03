import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { registerLocaleData } from "@angular/common"
import localePt from "@angular/common/locales/pt"

import { ToastrModule } from "ngx-toastr"

import { NavigationModule } from "./modules/navigation/navigation.module"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from './app.component';
import { ErrorInterceptor } from "./core/helpers/error.interceptor"

registerLocaleData(localePt, 'pt-BR')

registerLocaleData(localePt, 'pt-BR')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NavigationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
