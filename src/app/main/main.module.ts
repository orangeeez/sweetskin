import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MainRoutingModule } from './main-routing.module'
import { MainComponent } from './main/main.component'
import { SharedModule } from '@app/shared/shared.module'
import { IconListComponent } from './icon-list/icon-list.component'
import { IconListItemComponent } from './icon-list/icon-list-item/icon-list-item.component'

@NgModule({
  declarations: [MainComponent, IconListComponent, IconListItemComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
