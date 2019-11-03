import { Component, OnInit, Inject } from '@angular/core'
import { MatBottomSheetRef } from '@angular/material'
import { Observable } from 'rxjs'
import { AnalyticsCategory } from '@app/enums/analytics/analytics-category'
import { AnalyticsLabel } from '@app/enums/analytics/analytics-label'
import { AnalyticsAction } from '@app/enums/analytics/analytics-action'
import { AnalyticsEvent } from '@app/models/analytics/analytics-event'

@Component({
  selector: 'app-fab-bottom-sheet',
  templateUrl: './fab-bottom-sheet.component.html',
  styleUrls: ['./fab-bottom-sheet.component.scss'],
})
export class FabBottomSheetComponent implements OnInit {
  public isDarkTheme: Observable<boolean>

  constructor(
    private bottomSheetRef: MatBottomSheetRef<FabBottomSheetComponent>
  ) {}

  openLink(event: MouseEvent, type: string): void {
    let label

    switch (type) {
      case 'phone':
        label = AnalyticsLabel.FAB_PHONE
        break
      case 'reception':
        label = AnalyticsLabel.FAB_RECEPTION
        break
      case 'instagram':
        label = AnalyticsLabel.FAB_INSTAGRAM
        break
    }

    new AnalyticsEvent(
      AnalyticsCategory.FAB,
      label,
      AnalyticsAction.FAB_CLICKED
    ).send()

    this.bottomSheetRef.dismiss()
  }

  ngOnInit() {}
}
