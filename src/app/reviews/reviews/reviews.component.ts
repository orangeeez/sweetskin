import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { InteractionService } from '@app/core/services/interaction.service'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  quote = 'Lorem ipsum'
  heading = 'Отзывы'
  subheading = 'Lorem ipsum'
  count = 0
  mqalias: string
  items: any[]
  constructor(
    public mediaObserver: MediaObserver,
    public interactionService: InteractionService
  ) {
    const ext = this.interactionService.isSafari ? '.jpg' : '.webp'
    this.items = [
      'assets/images/reviews/1' + ext,
      'assets/images/reviews/2' + ext,
      'assets/images/reviews/3' + ext,
      'assets/images/reviews/4' + ext,
      'assets/images/reviews/5' + ext,
      'assets/images/reviews/6' + ext,
      'assets/images/reviews/7' + ext,
      'assets/images/reviews/8' + ext,
      'assets/images/reviews/9' + ext,
      'assets/images/reviews/10' + ext,
      'assets/images/reviews/11' + ext,
      'assets/images/reviews/12' + ext,
      'assets/images/reviews/13' + ext,
      'assets/images/reviews/14' + ext,
      'assets/images/reviews/15' + ext,
      'assets/images/reviews/16' + ext,
      'assets/images/reviews/17' + ext,
      'assets/images/reviews/18' + ext,
      'assets/images/reviews/19' + ext,
      'assets/images/reviews/20' + ext,
      'assets/images/reviews/21' + ext,
    ]
    mediaObserver.media$.subscribe(mediaChange => {
      this.mqalias = mediaChange.mqAlias
      switch (mediaChange.mqAlias) {
        case 'xs':
          this.count = 2
          break
        case 'sm':
          this.count = 2
          break
        case 'md':
          this.count = 3
          break
        case 'lg':
          this.count = 3
          break
        case 'xl':
          this.count = 4
          break
      }
    })
  }

  ngOnInit() {}

  onScroll() {
    // console.log('scroll')
    switch (this.mqalias) {
      case 'xs':
        this.count += 2
        break
      case 'sm':
        this.count += 2
        break
      case 'md':
        this.count += 3
        break
      case 'lg':
        this.count += 3
        break
      case 'xl':
        this.count += 4
        break
    }
  }
}
