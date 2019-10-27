import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { take } from 'rxjs/operators'
import { InteractionService } from './interaction.service'
import { AnalyticsEvent } from '@app/models/analytics/analytics-event'
import { AnalyticsCategory } from '@app/enums/analytics/analytics-category'
import { AnalyticsLabel } from '@app/enums/analytics/analytics-label'
import { AnalyticsAction } from '@app/enums/analytics/analytics-action'

@Injectable({
  providedIn: 'root',
})
export class FcmService {
  currentMessage = new BehaviorSubject(null)
  constructor(
    private interactionService: InteractionService,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging
  ) {
    this.angularFireMessaging.messaging.subscribe(_messaging => {
      _messaging.onMessage = _messaging.onMessage.bind(_messaging)
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging)
    })
  }

  generateUUID() {
    var d = new Date().getTime() //Timestamp
    var d2 = (performance && performance.now && performance.now() * 1000) || 0 //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 //random number between 0 and 16
      if (d > 0) {
        //Use timestamp until depleted
        r = (d + r) % 16 | 0
        d = Math.floor(d / 16)
      } else {
        //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0
        d2 = Math.floor(d2 / 16)
      }
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
  }

  /**
   * update token in firebase database
   *
   * @param userId userId as a key
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(() => {
      const data = {}
      data[userId] = token
      this.angularFireDB.object('fcmTokens/').update(data)
    })
  }

  /**
   * request permission for notification from firebase cloud messaging
   *
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      token => {
        this.interactionService.notificationPermission = Notification.permission
        new AnalyticsEvent(
          AnalyticsCategory.NOTIFICATIONS,
          AnalyticsLabel.NOTIFICATIONS_INTERACTION,
          AnalyticsAction.NOTIFICATIONS_ADDED
        ).send()
        this.updateToken(userId, token)
      },
      err => {
        console.error('Unable to get permission to notify.', err)
      }
    )
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(payload => {
      this.currentMessage.next(payload)
    })
  }
}
