export class Notification {
  body: string
  title: string
  vibrate: number[]
  icon: string
  requireInteraction: boolean = true
  renotify: boolean = true
  click_action: string

  constructor(title: string, body: string, action: string) {
    this.vibrate = [300, 100, 400, 100, 400, 100, 400]
    this.icon = '/assets/images/logo.png'
    this.title = title
    this.body = body
    this.click_action = action
  }
}
