import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './shared/material.module'
import { OverlayContainer } from '@angular/cdk/overlay'
import { ThemeService } from './core/services/theme.service'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('combined-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWithDelay',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private themeService: ThemeService,
    overlayContainer: OverlayContainer
  ) {
    this.themeService.isDarkTheme.subscribe(isDarkTheme => {
      isDarkTheme
        ? overlayContainer.getContainerElement().classList.add('dark-theme')
        : overlayContainer.getContainerElement().classList.remove('dark-theme')
    })
  }
}
