import { Component, OnInit } from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'
import { InteractionService } from '@app/core/services/interaction.service'

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss'],
})
export class IconListComponent implements OnInit {
  items: MainListItem[]
  constructor(public interactionService: InteractionService) {
    const ext = this.interactionService.isSafari ? '.png' : '.webp'
    this.items = [
      {
        image: `assets/images/main-items/procedures/procedure-1` + ext,
        text: `Чистка лица`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-2` + ext,
        text: `Массаж (классический, пластический, по жаке)`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-3` + ext,
        text: `Пилинг`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-4` + ext,
        text: `Лечебные и уходовые маски`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-5` + ext,
        text: `Уход по типу кожи`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-6` + ext,
        text: `Микротоковая терапия`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-7` + ext,
        text: `Карбокситерапия`,
      },
      {
        image: `assets/images/main-items/procedures/procedure-8` + ext,
        text: `Лечение вросших волос с помощью пилинга`,
      },
    ]
  }

  ngOnInit() {}
}
