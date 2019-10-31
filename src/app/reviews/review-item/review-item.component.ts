import { Component, OnInit, Input } from '@angular/core'
import { bounceIn } from 'ng-animate'
import { trigger, transition, useAnimation } from '@angular/animations'
import { InteractionService } from '@app/core/services/interaction.service'
// 'transform': 'rotate(' + rotate + 'deg)',
@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss'],
  animations: [
    trigger('bounceIn', [
      transition(
        '* => *',
        useAnimation(bounceIn, {
          params: { timing: 2 },
        })
      ),
    ]),
  ],
})
export class ReviewItemComponent implements OnInit {
  @Input() index: number
  @Input() item: any
  rotate: number
  margin: number
  bounceIn: any

  constructor(public interactionService: InteractionService) {
    this.rotate = [-30, -20, -10, 0, 10, 20, 30][Math.floor(Math.random() * 7)]
    this.margin = [5, 10, 15, 20, 25, 30][Math.floor(Math.random() * 6)]
  }

  ngOnInit() {}

  onImageClick() {
    if ('ontouchstart' in window)
      this.interactionService._imageClicked.next(this.item)
  }
}
