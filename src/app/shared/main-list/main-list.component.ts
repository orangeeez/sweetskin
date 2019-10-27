import { Component, OnInit, Input, HostListener } from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  @Input() items: MainListItem[]
  @Input() isTeam: boolean
  @Input() imageFlex: number
  @Input() contentFlex: number

  constructor() {}

  ngOnInit() {}
}
