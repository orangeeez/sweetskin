import { Component, OnInit } from '@angular/core'
import { InteractionService } from '../services/interaction.service'

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
  }
}
