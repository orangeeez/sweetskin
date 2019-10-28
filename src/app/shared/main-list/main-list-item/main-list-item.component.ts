import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'
import { MainListItemType } from '@app/models/main-list-item-type'
import { InteractionService } from '@app/core/services/interaction.service'
import { bounceInLeft } from 'ng-animate'
import { trigger, transition, useAnimation } from '@angular/animations'
import { AnimationService } from '@app/core/services/animation.service'
import { BaseAnimation } from '@app/inheritance/base-animation'

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
export class MainListItemComponent extends BaseAnimation
  implements OnInit, AfterViewInit, OnDestroy {
  MainListItemType = MainListItemType
  @Input() left: boolean
  @Input() item: MainListItem
  @Input() isTeam: boolean
  @Input() imageFlex: number
  @Input() contentFlex: number

  constructor(
    public interactionService: InteractionService,
    public animationService: AnimationService,
    public el: ElementRef
  ) {
    super(interactionService, animationService, el)

    this.componentType = 'main-list-item'
    this.animationType = 'bounceInLeft'
  }

  ngOnInit() {}

  ngAfterViewInit() {
    super.ngAfterViewInit()
  }

  ngOnDestroy() {
    super.ngOnDestroy()
  }
}
