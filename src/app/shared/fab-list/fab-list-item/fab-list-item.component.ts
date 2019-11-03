import { Component, OnInit, Input } from '@angular/core'
import { FabListItem } from '@app/models/fab-list-item'
import { AnalyticsEvent } from '@app/models/analytics/analytics-event'
import { AnalyticsCategory } from '@app/enums/analytics/analytics-category'
import { AnalyticsAction } from '@app/enums/analytics/analytics-action'
import { AnalyticsLabel } from '@app/enums/analytics/analytics-label'

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
    if (item.type === 'contacts') {
      let label
      switch (item.icon) {
        case 'my_location':
          label = AnalyticsLabel.CONTACTS_LOCATION
          break
        case 'instagram':
          label = AnalyticsLabel.CONTACTS_INSTAGRAM
          break
        case 'facebook':
          label = AnalyticsLabel.CONTACTS_FACEBOOK
          break
        case 'phone':
          label = AnalyticsLabel.CONTACTS_PHONE
          break
      }

      new AnalyticsEvent(
        AnalyticsCategory.CONTACTS,
        label,
        AnalyticsAction.CONTACTS_CLICKED
      ).send()
    }
    item.link && item.icon !== 'phone' ? (location.href = item.link) : ''
    item.link && item.icon === 'phone' ? window.open(item.link) : ''
  }
}
