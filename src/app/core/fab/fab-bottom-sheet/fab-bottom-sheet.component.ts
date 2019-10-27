import { Component, OnInit, Inject } from '@angular/core'
import { MatBottomSheetRef } from '@angular/material'
import { Observable } from 'rxjs'

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

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss()
  }

  ngOnInit() {}
}
