import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { MaterialModule } from './material.module'
import { MatCarouselModule } from '@ngmodule/material-carousel'
import { CarouselComponent } from './carousel/carousel.component'
import { HeadingComponent } from './heading/heading.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BlockquoteComponent } from './blockquote/blockquote.component'
import { MainListComponent } from './main-list/main-list.component'
import { MainListItemComponent } from './main-list/main-list-item/main-list-item.component'
import { HorizontalCarouselComponent } from './horizontal-carousel/horizontal-carousel.component'
import { HCarouselHeaderComponent } from './horizontal-carousel/h-carousel-header/h-carousel-header.component'
import { FabListItemComponent } from './fab-list/fab-list-item/fab-list-item.component'
import { FabListComponent } from './fab-list/fab-list.component'
import { PwaUpdatedComponent } from './snackbars/pwa-updated/pwa-updated.component'
import { PwaInstallationComponent } from './snackbars/pwa-installation/pwa-installation.component'
import { PwaMessagingComponent } from './snackbars/pwa-messaging/pwa-messaging.component'
import { IconListComponent } from './icon-list/icon-list.component'
import { IconListItemComponent } from './icon-list/icon-list-item/icon-list-item.component'

@NgModule({
  declarations: [
    CarouselComponent,
    HeadingComponent,
    BlockquoteComponent,
    MainListComponent,
    MainListItemComponent,
    HorizontalCarouselComponent,
    HCarouselHeaderComponent,
    FabListComponent,
    FabListItemComponent,
    PwaUpdatedComponent,
    PwaInstallationComponent,
    PwaMessagingComponent,
    IconListComponent,
    IconListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCarouselModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselComponent,
    HeadingComponent,
    BlockquoteComponent,
    MainListComponent,
    MainListItemComponent,
    HorizontalCarouselComponent,
    FabListComponent,
    FabListItemComponent,
    IconListComponent,
    IconListItemComponent,
  ],
  entryComponents: [
    PwaInstallationComponent,
    PwaUpdatedComponent,
    PwaMessagingComponent,
  ],
})
export class SharedModule {}
