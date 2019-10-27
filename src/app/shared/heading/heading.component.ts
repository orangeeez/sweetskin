import { Component, OnInit, Input, ElementRef } from '@angular/core'

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  @Input() heading: string
  @Input() subheading: string

  constructor(public ref: ElementRef) {}

  ngOnInit() {}
}
