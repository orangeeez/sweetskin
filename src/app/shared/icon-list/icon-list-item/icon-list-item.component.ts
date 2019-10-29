import { Component, OnInit, Input } from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'

@Component({
  selector: 'app-icon-list-item',
  templateUrl: './icon-list-item.component.html',
  styleUrls: ['./icon-list-item.component.scss'],
})
export class IconListItemComponent implements OnInit {
  @Input() item: MainListItem
  constructor() {}

  ngOnInit() {}
}
