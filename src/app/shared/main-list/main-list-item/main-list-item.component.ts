import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
} from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'
import { MainListItemType } from '@app/models/main-list-item-type'
import { InteractionService } from '@app/core/services/interaction.service'
import { bounceInLeft } from 'ng-animate'
import { trigger, transition, useAnimation } from '@angular/animations'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-main-list-item',
  templateUrl: './main-list-item.component.html',
  styleUrls: ['./main-list-item.component.scss'],
  animations: [
    trigger('bounceInLeft', [
      transition(
        '* => *',
        useAnimation(bounceInLeft, {
          params: { timing: 1, delay: 0 },
        })
      ),
    ]),
  ],
})
export class MainListItemComponent implements OnInit, AfterViewInit {
  MainListItemType = MainListItemType
  @Input() left: boolean
  @Input() item: MainListItem
  @Input() isTeam: boolean
  @Input() imageFlex: number
  @Input() contentFlex: number
  @Input() elementNumber: number
  scrollEvent$: Subscription
  bounceInLeft: any = false
  elementOffsetTop: number
  elementOffsetHeight: number
  elementSpaceHeight: number
  isElementShown: boolean

  constructor(
    public interactionService: InteractionService,
    public el: ElementRef
  ) {
    this.scrollEvent$ = this.interactionService.scroll.subscribe(event => {
      if (event.target) {
        if (
          event.target['scrollTop'] +
            this.interactionService.sidenavcontentHeight / 1.5 >=
          this.elementOffsetTop
        ) {
          this.animateElement('bounceInLeft')
          this.scrollEvent$.unsubscribe()
        }
      }
    })
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  animateElement(name: string) {
    this[name] = !this[name]
    this.isElementShown = true
  }

  onImageLoaded() {
    if (
      this.elementOffsetTop ||
      this.elementOffsetHeight ||
      this.elementSpaceHeight
    )
      return
    this.elementOffsetTop = this.el.nativeElement.offsetTop
    this.elementOffsetHeight = this.el.nativeElement.offsetHeight
    this.elementSpaceHeight = this.elementOffsetTop + this.elementOffsetHeight
    if (this.elementOffsetTop <= this.interactionService.sidenavcontentHeight) {
      this.isElementShown = true
      this.scrollEvent$.unsubscribe()
    }
  }
}
