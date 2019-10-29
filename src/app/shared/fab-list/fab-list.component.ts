import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core'
import { FabListItem } from '@app/models/fab-list-item'
import { BaseAnimation } from '@app/inheritance/base-animation'
import { InteractionService } from '@app/core/services/interaction.service'
import { AnimationService } from '@app/core/services/animation.service'
import { bounceIn } from 'ng-animate'
import { trigger, transition, useAnimation } from '@angular/animations'

@Component({
  selector: 'app-fab-list',
  templateUrl: './fab-list.component.html',
  styleUrls: ['./fab-list.component.scss'],
  animations: [
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
  ],
})
export class FabListComponent extends BaseAnimation
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() flexPercentage: string
  @Input() items: FabListItem[]

  constructor(
    public interactionService: InteractionService,
    public animationService: AnimationService,
    public el: ElementRef
  ) {
    super(interactionService, animationService, el)
    this.componentType = 'icon-list-item'
    this.animationType = 'bounceIn'
  }

  ngOnInit() {}

  ngAfterViewInit() {
    super.ngAfterViewInit()
  }

  ngOnDestroy() {
    super.ngOnDestroy()
  }
}
