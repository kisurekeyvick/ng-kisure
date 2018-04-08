import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//component
import { AppComponent } from './app.component';
//route
import { appRouteModule } from './app.route';
//translate
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
//core
import { coreModule } from './core/core.module';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { GrowlModule } from 'primeng/primeng';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    coreModule,
    LoadingModule,
    GrowlModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    appRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
