import { Component, OnInit, Inject } from '@angular/core'
import { MAT_SNACK_BAR_DATA } from '@angular/material'

@Component({
  selector: 'app-pwa-installation',
  templateUrl: './pwa-installation.component.html',
  styleUrls: ['./pwa-installation.component.scss'],
})
export class PwaInstallationComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit() {}
}
