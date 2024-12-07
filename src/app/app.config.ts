import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import {  HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgModel } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), HttpClient, NgModule, NgModel]
};
