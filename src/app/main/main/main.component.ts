import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { FabListItem } from '@app/models/fab-list-item'
import { MainListItem } from '@app/models/main-list-item'
import { InteractionService } from '@app/core/services/interaction.service'
import { HeadingComponent } from '@app/shared/heading/heading.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('start', { static: false })
  start: HeadingComponent
  proportion: number = 70
  maxWidth: number
  mainListItems: MainListItem[]
  public heading_1 = `Добро пожаловать в студию, где создаётся красота!`
  public heading_2 = `Приглашаем вас ознакомится с жизнью нашей студии`
  public heading_3 = `Косметологические процедуры`
  public heading_4 = `Сахарная депиляция`
  public heading_5 = `Наши контакты`
  public servicesHeading = 'Услуги'
  public servicesSubheading = ''
  public subheading_1 = `SWEETSKIN – это студия узкого профиля, которая специализируется на депиляции сахарной пастой – ШУГАРИНГЕ и эстетической косметологии для женщин и мужчин`
  public subheading_2 = ``
  public subheading_3 = ``
  public subheading_4 = ``
  public subheading_5 = `Хотите узнать где мы находимся и подписаться на нас в социальных сетях?`
  public quote_2 =
    'Мы заботимся о вашем здоровье и комфорте. Покорите мир вместе со SweetSkin '
  public quote_3 =
    'Шугаринг - это косметологическая Spa-процедура, предусматривающая удаление нежелательных волос с помощью сахарной пасты'
  public advantages: FabListItem[] = [
    {
      id: 1,
      text: `Обладает малой болезненностью`,
    },
    {
      id: 2,
      text: `Абсолютно безопасна, в отличии от лазерной и фото эпиляции`,
    },
    {
      id: 3,
      text: `Гипоалергенная`,
    },
    {
      id: 4,
      text: `Может применяться при любом типе кожи, любом цвете, а также жесткости волос`,
    },
    {
      id: 5,
      text: `Позволяет удалять нежелательные волосы на лице и в самых деликатных зонах`,
    },
    {
      id: 6,
      text: `Не вызывает усиления роста волос, напротив, способствует их истончению со временем`,
    },
    {
      id: 7,
      text: `Характеризуется отсутствием ожогов в процессе депиляции`,
    },
    {
      id: 8,
      text: `Одновременно с удалением волос обеспечивает легкий пилинг со снятием верхних ороговевших слоев кожи, делающий ее свежей и гладкой`,
    },
    {
      id: 9,
      text: `Подразумевает под собой работу исключительно натуральными, не содержащими отдушек и химических добавок материалами`,
    },
    {
      id: 10,
      text: `Обеспечивает длительный эффект гладкости, который с каждым разом увеличивается`,
    },
  ]

  public contacts: FabListItem[] = [
    {
      text: `Киев, улица Большая Житомирская 30-А`,
      icon: `my_location`,
      svg: false,
      link: 'https://goo.gl/maps/WHBpREED4Lxu1qLj8',
    },
    {
      text: `@sweet.skin.kiev`,
      icon: `instagram`,
      svg: true,
      link: 'https://www.instagram.com/sweet.skin.kiev/',
    },
    {
      text: `fb.com/helena .sweetskin`,
      icon: `facebook`,
      svg: true,
      link: 'https://www.facebook.com/sweet.skin.kiev/',
    },
    {
      text: `+38 (066) 708-80-63`,
      subtext: `+38 (098) 074-90-90`,
      icon: `phone`,
      svg: false,
      link: 'tel:+38 (066) 708-80-63',
    },
  ]

  public slides: any = {
    webp: [
      'assets/images/main-carousel/1.webp',
      'assets/images/main-carousel/2.webp',
      'assets/images/main-carousel/3.webp',
      'assets/images/main-carousel/4.webp',
      'assets/images/main-carousel/5.webp',
      'assets/images/main-carousel/6.webp',
      'assets/images/main-carousel/7.webp',
      'assets/images/main-carousel/8.webp',
    ],
    jpg: [
      'assets/images/main-carousel/1.jpg',
      'assets/images/main-carousel/2.jpg',
      'assets/images/main-carousel/3.jpg',
      'assets/images/main-carousel/4.jpg',
      'assets/images/main-carousel/5.jpg',
      'assets/images/main-carousel/6.jpg',
      'assets/images/main-carousel/7.jpg',
      'assets/images/main-carousel/8.jpg',
    ],
  }

  constructor(public interactionService: InteractionService) {
    const ext = this.interactionService.isSafari ? '.jpg' : '.webp'

    this.mainListItems = [
      {
        image: 'assets/images/main-items/sm/main-item-1' + ext,
        imageMD: 'assets/images/main-items/md/main-item-1' + ext,
        text: `Наше главное преимущество – высококвалифицированные мастера, которые
  качественно и быстро избавят вас от нежелательных волос профессиональной
  косметикой, а также помогут решить ряд проблем, связанных с кожей лица с
  помощью неинвазивных косметологических процедур. Мы с удовольствием поделимся
  знаниями по поводу домашнего ухода за кожей и подберем правильные уходовые
  средства и, в случае потребности, предоставим Вам возможность приобрести их
  прямо в салоне.`,
      },
      {
        image: 'assets/images/main-items/sm/main-item-2' + ext,
        imageMD: 'assets/images/main-items/md/main-item-2' + ext,
        text: `Наш главный девиз – бережное отношение к каждому клиенту, ведь каждый из Вас нам важен и дорог.`,
      },
      {
        image: 'assets/images/main-items/sm/main-item-3' + ext,
        imageMD: 'assets/images/main-items/md/main-item-3' + ext,
        text: `Именно по этому прежде всего мы заботимся о КОМФОРТЕ и СТЕРИЛЬНОСТИ процедуры, что подразумевает под собой:
— использования одноразовых расходников (простыни, перчатки, шапочки, шпателя);
— стерилизации всех инструментов;
— дезинфекции поверхностей после каждого клиента
— проведение депиляции только профессиональными материалами.`,
      },
      {
        image: 'assets/images/main-items/sm/main-item-4' + ext,
        imageMD: 'assets/images/main-items/md/main-item-4' + ext,
        text: `В работе мы используем материалы разных брендов и марок, что позволяет подобрать подходящую косметику конкретно под каждый тип кожи и проблематику.`,
      },
      {
        image: 'assets/images/main-items/sm/main-item-5' + ext,
        imageMD: 'assets/images/main-items/md/main-item-5' + ext,
        text: `Удобное месторасположение позволит быстро и разным видом транспорта добраться к нам из любой точки Киева, ведь мы дорожим временем каждой девушки и стараемся делать процедуру не только качественно, но и максимально быстро! Мы находимся по адресу ул. Большая Житомирская 30А. Совсем рядом располагается остановка «Львовская площадь», где останавливаются разные виды наземного транспорта, а к метро ЗОЛОТЫЕ ВОРОТА всего 10 минут ходьбы.
Напротив студии — Пейзажная аллея, а рядом есть магазины, супермаркеты и офисные центры.`,
      },
      {
        image: 'assets/images/main-items/sm/main-item-6' + ext,
        imageMD: 'assets/images/main-items/md/main-item-6' + ext,
        text: `Косметологические процедуры, а также Шугаринг проводится на удобной кушетке в светлом и уютном кабинете, где играет тихая, приятная музыка. Сама студия находится в массажном салоне, в котором для Вас созданы все комфортные условия (сан. узел, ресепшн, зона ожидания и кулер в свободном доступе).`,
      },
    ]
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.interactionService.isFirstVisit)
      this.interactionService.scrollVertically(this.start.ref.nativeElement)

    this.interactionService.isFirstVisit = false
  }
}
