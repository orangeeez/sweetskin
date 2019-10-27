import { Component, OnInit, Input } from '@angular/core'
import { FabListItem } from '@app/models/fab-list-item'

@Component({
  selector: 'app-fab-list-item',
  templateUrl: './fab-list-item.component.html',
  styleUrls: ['./fab-list-item.component.scss'],
})
export class FabListItemComponent implements OnInit {
  @Input() item: FabListItem
  constructor() {}

  ngOnInit() {}

  onLinkClick(item: FabListItem) {
    item.link && item.icon !== 'phone' ? (location.href = item.link) : ''
    item.link && item.icon === 'phone' ? window.open(item.link) : ''
  }
}
