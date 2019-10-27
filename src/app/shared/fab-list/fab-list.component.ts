import { Component, OnInit, Input } from '@angular/core'
import { FabListItem } from '@app/models/fab-list-item'

@Component({
  selector: 'app-fab-list',
  templateUrl: './fab-list.component.html',
  styleUrls: ['./fab-list.component.scss'],
})
export class FabListComponent implements OnInit {
  @Input() flexPercentage: string
  @Input() items: FabListItem[]

  constructor() {}

  ngOnInit() {}
}
