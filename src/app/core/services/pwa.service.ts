import { Injectable } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'
import { PwaUpdatedComponent } from '@app/shared/snackbars/pwa-updated/pwa-updated.component'
import { MatSnackBar } from '@angular/material'
import { InteractionService } from './interaction.service'
import { AnalyticsEvent } from '@app/models/analytics/analytics-event'
import { AnalyticsCategory } from '@app/enums/analytics/analytics-category'
import { AnalyticsLabel } from '@app/enums/analytics/analytics-label'
import { AnalyticsAction } from '@app/enums/analytics/analytics-action'
import { PwaInstallationComponent } from '@app/shared/snackbars/pwa-installation/pwa-installation.component'

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  constructor(
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
    public interactionService: InteractionService
  ) {}

  init() {
    if (this.swUpdate.isEnabled)
      this.swUpdate.available.subscribe(event => {
        let snackBarRef = this.snackBar.openFromComponent(PwaUpdatedComponent, {
          data: '',
          duration: 10000,
        })
      })

    window.addEventListener('beforeinstallprompt', e => {
      this.interactionService.isPWAInstalled = false
      this.interactionService.homePrompt = e

      this.interactionService.homePrompt.prompt()
      this.interactionService.homePrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          new AnalyticsEvent(
            AnalyticsCategory.PWA,
            AnalyticsLabel.PWA_INSTALLATION,
            AnalyticsAction.PWA_PROMPT_ACCEPTED
          ).send()
        } else {
          new AnalyticsEvent(
            AnalyticsCategory.PWA,
            AnalyticsLabel.PWA_INSTALLATION,
            AnalyticsAction.PWA_PROMPT_REJECTED
          ).send()
        }
        this.interactionService.homePrompt = null
      })
    })

    window.addEventListener('appinstalled', evt => {
      new AnalyticsEvent(
        AnalyticsCategory.PWA,
        AnalyticsLabel.PWA_INTERACTION,
        AnalyticsAction.PWA_INSTALLED
      ).send()
    })
  }

  showIOSBanner() {
    const isIos = /iphone|ipad|ipod/.test(
      window.navigator.userAgent.toLowerCase()
    )
    const isBannerShown = localStorage.getItem('isIOSBannerShown')
    const isIOSInStandaloneMode = window.navigator['standalone']

    if (isIos && !isIOSInStandaloneMode && !isBannerShown) {
      setTimeout(() => {
        localStorage.setItem('isIOSBannerShown', 'true')
        let snackBarRef = this.snackBar.openFromComponent(
          PwaInstallationComponent,
          {
            data: '',
            duration: 10000,
          }
        )
      }, 5000)
    }

    if (isIOSInStandaloneMode) {
      new AnalyticsEvent(
        AnalyticsCategory.PWA,
        AnalyticsLabel.PWA_INTERACTION,
        AnalyticsAction.PWA_LAUNCHED
      ).send()
    }
  }
}
