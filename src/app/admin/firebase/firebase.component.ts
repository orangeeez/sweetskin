import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { trigger, transition, useAnimation } from '@angular/animations'
import { bounceInLeft } from 'ng-animate'
import { Notification } from '@app/models/Notification'
import { NotificationSender } from '@app/models/notification-sender'
import { AngularFireDatabase } from '@angular/fire/database'
import { FcmService } from '@app/core/services/fcm.service'

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
  animations: [
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
  ],
})
export class FirebaseComponent implements OnInit {
  tokens: any[]
  bounceInLeft: any
  notificationForm: FormGroup

  constructor(public db: AngularFireDatabase, public fcmService: FcmService) {
    this.db
      .list('fcmTokens')
      .valueChanges()
      .subscribe(tokens => (this.tokens = tokens))

    this.notificationForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      body: new FormControl('', [Validators.required, Validators.minLength(4)]),
      path: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  ngOnInit() {}

  get form() {
    return this.notificationForm.controls
  }

  onSubmit() {
    const title = this.notificationForm.value.title
    const body = this.notificationForm.value.body
    const path = this.notificationForm.value.path

    let notification = new Notification(title, body, path)

    this.tokens.forEach(token => {
      let notificationSender = new NotificationSender(token, notification)
      this.fcmService.sendNotification(notificationSender).subscribe()
    })
  }

  onHistoryClick() {}
}
