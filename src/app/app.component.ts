import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core'
import { ThemeService } from '@app/core/services/theme.service'
import { Observable } from 'rxjs'
import {
  MatSidenav,
  MatIconRegistry,
  MatSnackBar,
  MatSidenavContent,
} from '@angular/material'
import { MenuItem } from './models/menuItem'
import { DomSanitizer } from '@angular/platform-browser'
import { InteractionService } from './core/services/interaction.service'
import { ScreenRatio } from './enums/screen-ratio'
import { Router, NavigationEnd } from '@angular/router'
import { PwaService } from './core/services/pwa.service'
import { FcmService } from './core/services/fcm.service'
import { AnimationService } from './core/services/animation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav
  @ViewChild('sidenavcontent', { static: false })
  sidenavcontent: MatSidenavContent
  public isDarkTheme: Observable<boolean>
  public menuItems: MenuItem[] = [
    { name: 'Главная', routerLink: '/main' },
    { name: 'Цены и акции', routerLink: '/services' },
    { name: 'Наша команда', routerLink: '/team' },
    { name: 'Контакты', routerLink: '/contacts' },
    { name: 'Отзывы', routerLink: '/reviews' },
  ]

  public slides: any = {
    webp: [
      'assets/images/carousel/1.webp',
      'assets/images/carousel/2.webp',
      'assets/images/carousel/3.webp',
    ],
    jpg: [
      'assets/images/carousel/1.jpg',
      'assets/images/carousel/2.jpg',
      'assets/images/carousel/3.jpg',
    ],
  }

  constructor(
    private themeService: ThemeService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    public interactionService: InteractionService,
    public animationService: AnimationService,
    private pwaService: PwaService,
    private fcmService: FcmService
  ) {
    this.interactionService.width = window.innerWidth
    this.interactionService.height = window.innerHeight
    this.interactionService.ratio = +(
      window.innerWidth / window.innerHeight
    ).toFixed(2)

    this.interactionService.isSafari = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    )

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ;(<any>window).ga('set', 'page', event.urlAfterRedirects)
        ;(<any>window).ga('send', 'pageview')
      }
    })

    const ratio = this.interactionService.ratio

    if (ratio === ScreenRatio.CLASSIC) {
      this.interactionService.carouselMaxWidth = 'auto'
      this.interactionService.carouselProportion = 50
    }

    if (ScreenRatio.CLASSIC < ratio && ratio <= ScreenRatio.WIDE) {
      this.interactionService.carouselMaxWidth = '80%'
      this.interactionService.carouselProportion = 45
    }

    if (ScreenRatio.WIDE < ratio && ratio <= ScreenRatio.CINEMA) {
      this.interactionService.carouselMaxWidth = '80%'
      this.interactionService.carouselProportion = 45
    }

    if (ratio >= ScreenRatio.CINEMA) {
      this.interactionService.carouselMaxWidth = '70%'
      this.interactionService.carouselProportion = 40
    }

    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/facebook.svg'
      )
    )
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/instagram.svg'
      )
    )
    this.matIconRegistry.addSvgIcon(
      'female',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/female.svg'
      )
    )
    this.matIconRegistry.addSvgIcon(
      'male',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/male.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'cotton',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/cotton.svg'
      )
    )
    this.matIconRegistry.addSvgIcon(
      'makeup',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/makeup.svg'
      )
    )

    this.matIconRegistry.addSvgIcon(
      'ios_share',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/ios_share.svg'
      )
    )
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme
    this.pwaService.init()
    this.fcmService.receiveMessage()
  }

  ngAfterViewInit() {
    this.interactionService.sidenavcontentHeight = this.sidenavcontent.getElementRef().nativeElement.clientHeight
    const isDark = localStorage.getItem('dark') === 'true'
    if (isDark) this.themeService.setDarkTheme(isDark)

    this.pwaService.showIOSBanner()
  }

  onActivate() {
    document.querySelector('mat-sidenav-content').scrollTop = 0
  }

  onScroll(event: Event) {
    this.animationService._scroll.next(event)
  }

  close() {
    this.sidenav.close()
  }
}
