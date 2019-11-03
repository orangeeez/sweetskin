import { Component, OnInit } from '@angular/core'
import { InteractionService } from '../services/interaction.service'
import { AnalyticsLabel } from '@app/enums/analytics/analytics-label'
import { AnalyticsAction } from '@app/enums/analytics/analytics-action'
import { AnalyticsCategory } from '@app/enums/analytics/analytics-category'
import { AnalyticsEvent } from '@app/models/analytics/analytics-event'

@Component({
  selector: 'app-pwa-install',
  templateUrl: './pwa-install.component.html',
  styleUrls: ['./pwa-install.component.scss'],
})
export class PwaInstallComponent implements OnInit {
  logo: string
  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    this.logo = this.interactionService.isSafari
      ? 'assets/images/logo.png'
      : 'assets/images/logo.webp'
  }

  onPwaInstallClick() {
    this.interactionService.homePrompt.prompt()
    this.interactionService.isPWAInstalled = true

    new AnalyticsEvent(
      AnalyticsCategory.PWA,
      AnalyticsLabel.PWA_INSTALLATION,
      AnalyticsAction.PWA_SIDENAV_INSTALLED
    ).send()
  }
}
