import { Component, OnInit, Input, ElementRef } from '@angular/core'
import { ThemeService } from '../services/theme.service'
import { Observable } from 'rxjs'
import { MatSidenav } from '@angular/material'
import { MenuItem } from '@app/models/menuItem'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav
  @Input() menuItems: MenuItem[]

  isDarkTheme: Observable<boolean>

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked)
  }

  onMenuClick() {
    this.sidenav.opened ? this.sidenav.close() : this.sidenav.open()
  }
}
