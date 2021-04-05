import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core'
import { FabListItem } from '@app/models/fab-list-item'
import { InteractionService } from '@app/core/services/interaction.service'
import { HeadingComponent } from '@app/shared/heading/heading.component'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  @ViewChild('start', { static: false })
  start: HeadingComponent
  public heading_5 = `Наши контакты`
  public subheading_5 = `Хотите узнать где мы находимся и подписаться на нас в социальных сетях?`

  public contacts: FabListItem[] = [
    {
      text: `Киев, ул. Бассейная 5-Б`,
      icon: `my_location`,
      svg: false,
      link: 'https://goo.gl/maps/KfneNMy3HqCQb4hB7',
      type: 'contacts',
    },
    {
      text: `@sweet.skin.kiev`,
      icon: `instagram`,
      svg: true,
      link: 'https://www.instagram.com/sweet.skin.kiev/',
      type: 'contacts',
    },
    {
      text: `fb.com/sweet.skin.kiev`,
      icon: `facebook`,
      svg: true,
      link: 'https://www.facebook.com/sweet.skin.kiev/',
      type: 'contacts',
    },
    {
      text: `+38 (096) 802-00-41`,
      subtext: `+38 (098) 074-90-90`,
      icon: `phone`,
      svg: false,
      link: 'tel:+38 (096) 802-00-41',
      type: 'contacts',
    },
  ]

  constructor(private interactionService: InteractionService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.interactionService.scrollVertically(this.start.ref.nativeElement)
  }
}
