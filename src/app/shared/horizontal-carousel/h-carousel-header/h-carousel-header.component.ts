import { Component, OnInit, Input, ElementRef } from '@angular/core'
import { hCarouselItem } from '@app/models/h-carousel/h-carousel-item'

@Component({
  selector: 'app-h-carousel-header',
  templateUrl: './h-carousel-header.component.html',
  styleUrls: ['./h-carousel-header.component.scss'],
})
export class HCarouselHeaderComponent implements OnInit {
  @Input() item: hCarouselItem
  constructor(public ref: ElementRef) {}

  ngOnInit() {}
}
