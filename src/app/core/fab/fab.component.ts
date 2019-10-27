import { Component, OnInit } from '@angular/core'
import { MatBottomSheet } from '@angular/material'
import { FabBottomSheetComponent } from './fab-bottom-sheet/fab-bottom-sheet.component'

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openBottomSheet(): void {
    this.bottomSheet.open(FabBottomSheetComponent)
  }
}
