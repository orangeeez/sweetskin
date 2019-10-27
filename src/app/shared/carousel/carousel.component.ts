import { Component, OnInit, Input } from '@angular/core'
import {
  MatCarousel,
  MatCarouselComponent,
  Orientation,
} from '@ngmodule/material-carousel'
import { FcmService } from '@app/core/services/fcm.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() public slides: string[]
  @Input() public proportion = 70
  @Input() public hideOverlay: boolean
  @Input() public hideTitle: boolean
  @Input() public showButton: boolean
  @Input() public maxWidth = 'auto'
  public timings = '250ms ease-in'
  public autoplay = true
  public interval = 3000
  public loop = true
  public hideArrows = false
  public hideIndicators = false
  public overlayColor = '#00000040'
  public useKeyboard = true
  public useMouseWheel = false
  public orientation: Orientation = 'ltr'

  constructor(private fcmService: FcmService) {}

  ngOnInit() {}

  public onChange(index: number) {}

  onNotificationClick() {
    this.fcmService.requestPermission(this.fcmService.generateUUID())
  }
}
