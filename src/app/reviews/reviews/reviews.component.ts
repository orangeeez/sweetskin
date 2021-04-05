import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { InteractionService } from '@app/core/services/interaction.service'
import { BlockquoteComponent } from '@app/shared/blockquote/blockquote.component'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit, AfterViewInit {
  @ViewChild('start', { static: false })
  start: BlockquoteComponent
  quote =
    'Наша работа — заботиться о клиентах настолько хорошо, чтобы они продолжали возвращаться к нам снова и снова'
  heading = 'Отзывы'
  subheading = ''
  count = 0
  mqalias: string
  items: any[]
  constructor(
    public mediaObserver: MediaObserver,
    public interactionService: InteractionService
  ) {
    const ext = this.interactionService.isSafari ? '.jpg' : '.webp'
    this.items = [
      'assets/images/reviews/31' + ext,
      'assets/images/reviews/30' + ext,
      'assets/images/reviews/29' + ext,
      'assets/images/reviews/28' + ext,
      'assets/images/reviews/27' + ext,
      'assets/images/reviews/26' + ext,
      'assets/images/reviews/25' + ext,
      'assets/images/reviews/24' + ext,
      'assets/images/reviews/23' + ext,
      'assets/images/reviews/22' + ext,
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

  ngAfterViewInit() {
    this.interactionService.scrollVertically(this.start.ref.nativeElement)
  }

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
