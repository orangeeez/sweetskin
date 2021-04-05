import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core'
import { MainListItem } from '@app/models/main-list-item'
import { InteractionService } from '@app/core/services/interaction.service'
import { ScreenSize } from '@app/enums/screen-size'
import { BlockquoteComponent } from '@app/shared/blockquote/blockquote.component'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit, AfterViewInit {
  @ViewChild('start', { static: false })
  start: BlockquoteComponent
  quote = 'Мастера студии Sweet Skin'
  public heading_1 = `Елена`
  public subheading_1 = `Ведущий мастер шугаринга, косметолог `

  public heading_2 = `Ольга`
  public subheading_2 = `Мастер шугаринга, косметолог`

  public heading_3 = `Галерея`
  public subheading_3 = ``

  public slides: any = {
    webp: [
      'assets/images/team-carousel/1.webp',
      'assets/images/team-carousel/2.webp',
      'assets/images/team-carousel/3.webp',
      'assets/images/team-carousel/4.webp',
      'assets/images/team-carousel/5.webp',
      'assets/images/team-carousel/6.webp',
    ],
    jpg: [
      'assets/images/team-carousel/1.jpg',
      'assets/images/team-carousel/2.jpg',
      'assets/images/team-carousel/3.jpg',
      'assets/images/team-carousel/4.jpg',
      'assets/images/team-carousel/5.jpg',
      'assets/images/team-carousel/6.jpg',
    ],
  }

  listItem_1: MainListItem[]
  listItem_2: MainListItem[]
  constructor(public interactionService: InteractionService) {
    const ext = this.interactionService.isSafari ? '.jpg' : '.webp'

    this.listItem_1 = [
      {
        image: 'assets/images/team/sm/elena2' + ext,
        imageMD: 'assets/images/team/md/elena2' + ext,
        text: `Меня зовут Голядинец Елена и я ведущий мастер шугаринга, косметолог и по совместительству владелица студии Sweet Skin.

        Моя активная работа в этой сфере началась с 2015 года и за эти 6 лет мной было пройдено неисчислимое количество различных конференций, обучающих семинаров, чемпионатов и тренингов (в 2019 я заняла 1 место по депиляции на Всеукраинском чемпионате СМКУ);
        Я помогла сотням наших клиентов справится с их кожными проблемами, такими как акне (угревая болезнь), разные виды возрастных изменений, постоянная отечность, излишняя растительность на теле...
        Стала глубоким специалистом в области эстетической косметологии по работе с проблемной кожей, Хиропластической технике массажа, а также различными аппаратными методиками .
        Я всегда комплексно подхожу к проблематике, мой девиз в работе - помочь клиенту не только салонной процедурой, но и подбором качественного домашнего ухода, направлением на сдачу анализов и к смежным специалистам - гинекологам/эндокринологам если к этому весомые показания, проработка с клиентом психосоматического влияния на проблему и коррекция питания.
        
        Благодарная улыбка моих клиентов — моя главная награда! Приходи к нам в студию и увидишь, как ощущение уверенности — меняет жизнь!`,
      },
    ]

    this.listItem_2 = [
      {
        image: 'assets/images/team/sm/olga2' + ext,
        imageMD: 'assets/images/team/md/olga2' + ext,
        text: `Меня зовут Алёна Гненкова, мне 39 лет и я мастер шугаринга с 10 летним стажем и косметолог с активным стажем работы 8 лет. 
        С 2011 года я обучилась шугарингу и начала работать в этой сфере, когда он только появился в нашей стране. Я фактически стояла у истоков этой процедуры и застала всевозможные техники и этапы его развития. За годы работы я не только отточила технику сахарной депиляции до совершенства, а и досконально изучила кожу и кожные заболевания, что сильно помогает в консультирование наших клиентов.
        Также я практикующий косметолог и успешно решаю различные проблемы с угревыми высыпаниями, розацеа, морщинамы, дряблой кожей, пигментацией, камедонами и многими другими эстетическими нюансами БЕЗ ПРИБЕГАНИЯ К УКОЛАМ! Я владею различными эффективнейшими техниками массажа лица (глубокий хиропластический, расслабляющий нейроседативный, венозный и лимфо-дренажный).
        Я долго жила и развивалась в сфере косметологии в Грузии, так что у меня есть большой опыт чтобы вам помочь!
        Я не только качественно провожу процедуры в стенах кабинета, но и подобраю правильный домашний уход под каждый тип кожи и проблематику. Моя задача - помочь клиентам быть ухоженными, привлекательными и здоровыми, и я с радостью поделюсь с вами своими знаниями и большим опытом! Жду вас на процедуры в Sweet Skin.`,
      },
    ]
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.interactionService.scrollVertically(this.start.ref.nativeElement)
  }
}
