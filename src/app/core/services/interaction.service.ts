import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  isPWAInstalled: boolean = true
  isSafari: boolean
  isFirstVisit: boolean = true
  width: number
  height: number
  ratio: number
  homePrompt: any
  carouselProportion: number = 70
  carouselMaxWidth: string = 'auto'
  sidenavcontentHeight: number
  notificationPermission: string

  constructor() {
    this.notificationPermission = Notification.permission
  }

  scrollVertically(element: any) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
