import { Subscription } from 'rxjs'
import { InteractionService } from '@app/core/services/interaction.service'
import { AnimationService } from '@app/core/services/animation.service'
import {
  ElementRef,
  Component,
  AfterViewInit,
  OnDestroy,
  Injectable,
} from '@angular/core'

export class BaseAnimation implements AfterViewInit, OnDestroy {
  scrollEvent$: Subscription
  bounceInLeft: any = false
  bounceInDown: any = false
  fadeIn: any = false
  elementOffsetTop: number
  isElementShown: boolean = false
  componentType: string
  animationType: string

  constructor(
    public interactionService: InteractionService,
    public animationService: AnimationService,
    public el: ElementRef
  ) {
    this.scrollEvent$ = this.animationService.scroll.subscribe(event => {
      if (event.target && this.elementOffsetTop) {
        this.initElementOffset()
        if (this.isElementInView(event)) {
          this.animateElement(this.animationType)
          if (this.scrollEvent$) this.scrollEvent$.unsubscribe()
        }
      }
    })
  }

  ngAfterViewInit() {
    this.initElementOffset()
  }

  private isElementInView(event) {
    switch (this.componentType) {
      case 'heading':
        return (
          event.target['scrollTop'] +
            this.interactionService.sidenavcontentHeight -
            20 >=
          this.elementOffsetTop
        )
      case 'icon-list-item':
        return (
          event.target['scrollTop'] +
            this.interactionService.sidenavcontentHeight -
            20 >=
          this.elementOffsetTop
        )
      case 'main-list-item':
        return (
          event.target['scrollTop'] +
            this.interactionService.sidenavcontentHeight / 1.5 >=
          this.elementOffsetTop
        )
      default:
        return
    }
  }

  ngOnDestroy() {
    if (this.scrollEvent$) this.scrollEvent$.unsubscribe()
  }

  initElementOffset() {
    this.elementOffsetTop = this.el.nativeElement.offsetTop

    if (this.elementOffsetTop <= this.interactionService.sidenavcontentHeight) {
      this.isElementShown = true
      if (this.scrollEvent$) this.scrollEvent$.unsubscribe()
    }
  }

  animateElement(name: string) {
    this[name] = !this[name]
    this.isElementShown = true
  }
}
