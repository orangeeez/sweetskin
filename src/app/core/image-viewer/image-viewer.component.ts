import { Component, OnInit } from '@angular/core'
import { InteractionService } from '../services/interaction.service'
import { bounceIn, bounceOut } from 'ng-animate'
import { trigger, transition, useAnimation } from '@angular/animations'

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  animations: [
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
    trigger('bounceOut', [transition('* => *', useAnimation(bounceOut))]),
  ],
})
export class ImageViewerComponent implements OnInit {
  image: string
  bounceIn: any
  bounceOut: any = false
  constructor(public interactionService: InteractionService) {
    this.interactionService.imageClicked.subscribe((image: string) => {
      this.bounceIn = !this.bounceIn
      this.image = image
    })
  }

  ngOnInit() {}

  onCloseClick() {
    this.bounceOut = !this.bounceOut
  }

  bounceOutDone() {
    this.image = null
  }
}
