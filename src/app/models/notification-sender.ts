import { Notification } from './Notification'

export class NotificationSender {
  to: string
  notification: Notification

  constructor(to: string, notification: Notification) {
    this.to = to
    this.notification = notification
  }
}
