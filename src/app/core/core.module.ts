import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthGuard } from './guards/auth.guard'
import { NoAuthGuard } from './guards/no-auth.guard'
import { TokenInterceptor } from './interceptors/token.interceptor'
import { throwIfAlreadyLoaded } from './guards/module-import.guard'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MaterialModule } from '../shared/material.module'
import { ThemeService } from './services/theme.service'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FabComponent } from './fab/fab.component'
import { RouterModule } from '@angular/router'
import { FabBottomSheetComponent } from './fab/fab-bottom-sheet/fab-bottom-sheet.component'
import { PwaService } from './services/pwa.service'
import { AngularFireModule } from '@angular/fire'
import { environment } from 'environments/environment'
import { FcmService } from './services/fcm.service'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireMessagingModule } from '@angular/fire/messaging'
import { PwaInstallComponent } from './pwa-install/pwa-install.component'
import { AnimationService } from './services/animation.service'
import { ImageViewerComponent } from './image-viewer/image-viewer.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FabComponent,
    FabBottomSheetComponent,
    PwaInstallComponent,
    ImageViewerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FabComponent,
    PwaInstallComponent,
    ImageViewerComponent,
  ],
  providers: [
    ThemeService,
    PwaService,
    AnimationService,
    AuthGuard,
    NoAuthGuard,
    FcmService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  entryComponents: [FabBottomSheetComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }
}
