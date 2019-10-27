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
  _scroll = new BehaviorSubject(new Event('scroll'))

  constructor() {
    this.notificationPermission = Notification.permission
  }

  get scroll() {
    return this._scroll.asObservable()
  }

  scrollVertically(element: any) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
