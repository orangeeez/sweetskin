import { Component, OnInit, Inject } from '@angular/core'
import { MAT_SNACK_BAR_DATA } from '@angular/material'
import { FcmService } from '@app/core/services/fcm.service'

@Component({
  selector: 'app-pwa-messaging',
  templateUrl: './pwa-messaging.component.html',
  styleUrls: ['./pwa-messaging.component.scss'],
})
export class PwaMessagingComponent implements OnInit {
  timer: any
  value: number = 0
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: number,
    private fcmService: FcmService
  ) {
    this.timer = setInterval(() => {
      if (data === 0) clearInterval(this.timer)

      this.value += 25
      this.data--
    }, 1000)
  }

  ngOnInit() {}

  onNotificationClick() {
    this.fcmService.requestPermission(this.fcmService.generateUUID())
  }
}
