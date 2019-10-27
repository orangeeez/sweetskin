import { Component, OnInit, Input, ElementRef } from '@angular/core'

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss'],
})
export class BlockquoteComponent implements OnInit {
  @Input() quote: string
  @Input() fontSize: string
  constructor(public ref: ElementRef) {}

  ngOnInit() {}
}
