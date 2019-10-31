import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'
import { InteractionService } from '@app/core/services/interaction.service'
import { BaseAnimation } from '@app/inheritance/base-animation'
import { AnimationService } from '@app/core/services/animation.service'
import { bounceIn } from 'ng-animate'
import { trigger, transition, useAnimation } from '@angular/animations'

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss'],
  animations: [
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
  ],
})
export class IconListComponent extends BaseAnimation
  implements OnInit, AfterViewInit, OnDestroy {
  items: MainListItem[]
  bounceIn: any
  constructor(
    public interactionService: InteractionService,
    public animationService: AnimationService,
    public el: ElementRef
  ) {
    super(interactionService, animationService, el)
    this.componentType = 'icon-list-item'
    this.animationType = 'bounceIn'

    const ext = this.interactionService.isSafari ? '.png' : '.webp'
    this.items = [
      {
        image: `assets/images/main-items/procedures/procedure-1` + ext,
        text: `Чистка лица`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-2` + ext,
        text: `Массаж (классический, пластический, по жаке)`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-3` + ext,
        text: `Пилинг`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-4` + ext,
        text: `Лечебные и уходовые маски`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-5` + ext,
        text: `Уход по типу кожи`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-6` + ext,
        text: `Микротоковая терапия`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-7` + ext,
        text: `Карбокситерапия`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-8` + ext,
        text: `Лечение вросших волос с помощью пилинга`,
      },
    ]
  }

  ngOnInit() {}

  ngAfterViewInit() {
    super.ngAfterViewInit()
  }

  ngOnDestroy() {
    super.ngOnDestroy()
  }
}
