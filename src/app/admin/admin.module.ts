import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './admin/admin.component'
import { FirebaseComponent } from './firebase/firebase.component'
import { SharedModule } from '@app/shared/shared.module'

@NgModule({
  declarations: [AdminComponent, FirebaseComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
