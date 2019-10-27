import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ServicesRoutingModule } from './services-routing.module'
import { ServicesComponent } from './services.component'
import { SharedModule } from '@app/shared/shared.module';
import { CosmetologyTableComponent } from './cosmetology-table/cosmetology-table.component';
import { RustlingTableComponent } from './rustling-table/rustling-table.component'

@NgModule({
  declarations: [ServicesComponent, CosmetologyTableComponent, RustlingTableComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
