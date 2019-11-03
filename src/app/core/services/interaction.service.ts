import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

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
  _imageClicked = new BehaviorSubject('')

  get imageClicked() {
    return this._imageClicked.asObservable()
  }

  constructor() {
    if ('Notification' in window)
      this.notificationPermission = Notification.permission
  }

  scrollVertically(element: any) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
