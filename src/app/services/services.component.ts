import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { servicesTabItem } from '@app/models/services/services-tab-item'
import { InteractionService } from '@app/core/services/interaction.service'
import { HeadingComponent } from '@app/shared/heading/heading.component'
import { MatSnackBar } from '@angular/material'
import { PwaMessagingComponent } from '@app/shared/snackbars/pwa-messaging/pwa-messaging.component'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('start', { static: false })
  start: HeadingComponent
  public heading_1 = `Цены и акции`
  public subheading_1 = ``
  tabItems: servicesTabItem[] = [
    { label: 'Шугаринг', table: 'rustling' },
    { label: 'Косметология', table: 'cosmetology' },
  ]
  constructor(
    private interactionService: InteractionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.interactionService.scrollVertically(this.start.ref.nativeElement)

    if (this.interactionService.notificationPermission == 'default')
      setTimeout(() => {
        let snackBarRef = this.snackBar.openFromComponent(
          PwaMessagingComponent,
          {
            data: 5000,
            duration: 5000,
          }
        )
      }, 5000)
  }
}
