import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  public _scroll = new BehaviorSubject(new Event('scroll'))
  public _offsetInitiated = new BehaviorSubject('')

  get scroll() {
    return this._scroll.asObservable()
  }

  get offsetInitiated() {
    return this._offsetInitiated.asObservable()
  }

  constructor() {}
}
