import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pwa-updated',
  templateUrl: './pwa-updated.component.html',
  styleUrls: ['./pwa-updated.component.scss'],
})
export class PwaUpdatedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onUpdateClick() {
    window.location.reload()
  }
}
