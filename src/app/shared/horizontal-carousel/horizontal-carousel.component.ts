import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  Input,
} from '@angular/core'
import { hCarouselItem } from '@app/models/h-carousel/h-carousel-item'
import { HCarouselHeaderComponent } from './h-carousel-header/h-carousel-header.component'
import { ThemeService } from '@app/core/services/theme.service'
import { hThemeColor } from '@app/models/h-carousel/h-theme-color'
import { MatTabChangeEvent } from '@angular/material'
import { InteractionService } from '@app/core/services/interaction.service'

@Component({
  selector: 'app-horizontal-carousel',
  templateUrl: './horizontal-carousel.component.html',
  styleUrls: ['./horizontal-carousel.component.scss'],
})
export class HorizontalCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('wrapperFlexbox', { static: false })
  wrapperFlexbox!: ElementRef
  @ViewChildren(HCarouselHeaderComponent) headers: QueryList<
    HCarouselHeaderComponent
  >
  @Input() isShow: boolean
  currentIndex = 0
  colorIndex = 0
  lightThemeColors: hThemeColor[] = [
    { headerColor: '#d878a0', backgroundColor: '#f3d4dc' },
    { headerColor: '#7e9dc1', backgroundColor: '#c4d1e0' },
    { headerColor: '#56a989', backgroundColor: '#a0ccbb' },
    { headerColor: '#177da9', backgroundColor: '#679fb7' },
    { headerColor: '#af6e8d', backgroundColor: '#b991a4' },
    { headerColor: '#d3d86e', backgroundColor: '#dcdeb2' },
  ]

  darkThemeColors: hThemeColor[] = [
    { headerColor: '#ce93d8', backgroundColor: '#ffc4ff' },
    { headerColor: '#7d7d7d', backgroundColor: '#424242' },
  ]

  items: hCarouselItem[]

  depilation: hCarouselItem[]

  cosmetology: hCarouselItem[]

  constructor(
    private themeService: ThemeService,
    public interactionService: InteractionService
  ) {
    const ext = this.interactionService.isSafari ? '.jpg' : '.webp'
    this.depilation = [
      {
        id: 0,
        elementID: 'test',
        header: 'Подмышки',
        backgroundColor: '#f3d4dc',
        headerColor: '#d878a0',
        image: 'assets/images/h-carousel/depilation/sm/1' + ext,
        imageMD: 'assets/images/h-carousel/depilation/md/1' + ext,
      },
      {
        id: 1,
        elementID: 'test',
        header: 'Зона бикини (глубокое и классическое)',
        backgroundColor: '#c4d1e0',
        headerColor: '#7e9dc1',
        image: 'assets/images/h-carousel/depilation/sm/2' + ext,
        imageMD: 'assets/images/h-carousel/depilation/md/2' + ext,
      },
      {
        id: 2,
        elementID: 'test',
        header: 'Ножки',
        backgroundColor: '#a0ccbb',
        headerColor: '#56a989',
        image: 'assets/images/h-carousel/depilation/sm/3' + ext,
        imageMD: 'assets/images/h-carousel/depilation/md/3' + ext,
      },
      {
        id: 3,
        elementID: 'test',
        header: 'Руки',
        backgroundColor: '#679fb7',
        headerColor: '#177da9',
        image: 'assets/images/h-carousel/depilation/sm/4' + ext,
        imageMD: 'assets/images/h-carousel/depilation/md/4' + ext,
      },
      {
        id: 4,
        elementID: 'test',
        header: 'Торс',
        backgroundColor: '#b991a4',
        headerColor: '#af6e8d',
        image: 'assets/images/h-carousel/depilation/sm/5' + ext,
        imageMD: 'assets/images/h-carousel/depilation/md/5' + ext,
      },
      {
        id: 5,
        elementID: 'test',
        header: 'Живот',
        backgroundColor: '#dcdeb2',
        headerColor: '#d3d86e',
        image: 'assets/images/h-carousel/depilation/sm/6' + ext,
        imageMD: 'assets/images/h-carousel/depilation/md/6' + ext,
      },
      {
        id: 6,
        elementID: 'test',
        header: 'Лицо и шея',
        backgroundColor: '#a0ccbb',
        headerColor: '#56a989',
        image: 'assets/images/h-carousel/depilation/sm/10' + ext,
        imageMD: 'assets/images/h-carousel/depilation/md/10' + ext,
      },
    ]

    this.cosmetology = [
      {
        id: 0,
        elementID: 'test',
        header: 'Уход по типу кожи',
        backgroundColor: '#f3d4dc',
        headerColor: '#d878a0',
        image: 'assets/images/h-carousel/cosmetology/sm/1' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/1' + ext,
      },
      {
        id: 1,
        elementID: 'test',
        header: 'Карбокситерапия',
        backgroundColor: '#c4d1e0',
        headerColor: '#7e9dc1',
        image: 'assets/images/h-carousel/cosmetology/sm/2' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/2' + ext,
      },
      {
        id: 2,
        elementID: 'test',
        header: 'Массаж лица',
        backgroundColor: '#a0ccbb',
        headerColor: '#56a989',
        image: 'assets/images/h-carousel/cosmetology/sm/3' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/3' + ext,
      },
      {
        id: 3,
        elementID: 'test',
        header: 'Пилинги',
        backgroundColor: '#679fb7',
        headerColor: '#177da9',
        image: 'assets/images/h-carousel/cosmetology/sm/4' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/4' + ext,
      },
      {
        id: 4,
        elementID: 'test',
        header: 'Маски',
        backgroundColor: '#dcdeb2',
        headerColor: '#d3d86e',
        image: 'assets/images/h-carousel/cosmetology/sm/6' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/6' + ext,
      },
      {
        id: 5,
        elementID: 'test',
        header: 'Чистка лица (ультразвуковая, механическая, комбинированная)',
        backgroundColor: '#679fb7',
        headerColor: '#177da9',
        image: 'assets/images/h-carousel/cosmetology/sm/7' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/7' + ext,
      },
      {
        id: 6,
        elementID: 'test',
        header: 'Чистка лица + уход',
        backgroundColor: '#a0ccbb',
        headerColor: '#56a989',
        image: 'assets/images/h-carousel/cosmetology/sm/8' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/8' + ext,
      },
      {
        id: 7,
        elementID: 'test',
        header: 'Микротоковая терапия',
        backgroundColor: '#679fb7',
        headerColor: '#177da9',
        image: 'assets/images/h-carousel/cosmetology/sm/9' + ext,
        imageMD: 'assets/images/h-carousel/cosmetology/md/9' + ext,
      },
    ]

    this.items = this.depilation
    this.themeService.isDarkTheme.subscribe(isDarkTheme => {
      const colors = isDarkTheme ? this.darkThemeColors : this.lightThemeColors
      for (let item of this.items) {
        if (this.colorIndex <= colors.length - 1) {
          item.headerColor = colors[this.colorIndex].headerColor
          item.backgroundColor = colors[this.colorIndex].backgroundColor
          this.wrapperFlexbox.nativeElement.style.backgroundColor =
            colors[this.colorIndex].backgroundColor
          this.colorIndex++
        } else this.changeColorAndReset(colors, item)
      }
    })
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.themeService.setDarkTheme(localStorage.getItem('dark') === 'true')
  }

  scroll(el: any) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  onSwipe(event) {
    if (event.deltaX > 0 && this.currentIndex > 0) {
      const header = this.headers.find(
        header => this.currentIndex - 1 === header.item.id
      )
      console.log(header.item)
      this.currentIndex--
      this.wrapperFlexbox.nativeElement.style.backgroundColor =
        header.item.backgroundColor
      this.scroll(header.ref.nativeElement)
    } else if (
      event.deltaX < 0 &&
      this.currentIndex !== this.headers.length - 1
    ) {
      const header = this.headers.find(
        header => this.currentIndex + 1 === header.item.id
      )
      console.log(header.item)
      this.currentIndex++
      this.wrapperFlexbox.nativeElement.style.backgroundColor =
        header.item.backgroundColor
      this.scroll(header.ref.nativeElement)
    }
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'depilation') this.items = this.depilation

    if (event.tab.textLabel === 'cosmetology') this.items = this.cosmetology

    this.themeService.setDarkTheme(localStorage.getItem('dark') === 'true')

    this.currentIndex = 0
    this.scroll(this.headers.first.ref.nativeElement)
  }

  private changeColorAndReset(colors: hThemeColor[], item: hCarouselItem) {
    this.colorIndex = 0
    item.headerColor = colors[this.colorIndex].headerColor
    item.backgroundColor = colors[this.colorIndex].backgroundColor
    this.wrapperFlexbox.nativeElement.style.backgroundColor =
      colors[this.colorIndex].backgroundColor
  }
}
