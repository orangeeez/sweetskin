import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core'
import { trigger, transition, useAnimation } from '@angular/animations'
import { bounceInDown } from 'ng-animate'
import { BaseAnimation } from '@app/inheritance/base-animation'
import { InteractionService } from '@app/core/services/interaction.service'
import { AnimationService } from '@app/core/services/animation.service'

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  animations: [
    trigger('bounceInDown', [
      transition(
        '* => *',
        useAnimation(bounceInDown, {
          params: { timing: 2, delay: 0 },
        })
      ),
    ]),
  ],
})
export class HeadingComponent extends BaseAnimation
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() heading: string
  @Input() subheading: string

  constructor(
    public ref: ElementRef,
    public interactionService: InteractionService,
    public animationService: AnimationService,
    public el: ElementRef
  ) {
    super(interactionService, animationService, el, 'heading', 'bounceInDown')
  }

  ngOnInit() {}

  ngAfterViewInit() {
    super.ngAfterViewInit()
  }

  ngOnDestroy() {
    super.ngOnDestroy()
  }
}
