import { Component, OnInit } from '@angular/core'
import { TableItem } from '@app/models/services/table-item'
import { Gender } from '@app/models/services/gender'

const ELEMENT_DATA: TableItem[] = [
  { zone: 'Комплекс #1 (глубокое бикини, ноги полностью, подмышки)', master: '850', top: '850' },
  { zone: 'Комплекс #2 (глубокое бикини, ноги до колен, подмышки)', master: '690', top: '690' },
  { zone: 'Все тело', master: '1100', top: '1100' },
  { zone: 'Глубокое бикини ', master: '350', top: '400' },
  { zone: 'Классическое бикини', master: '200', top: '250' },
  { zone: 'Классическое бикини + лобок', master: '250', top: '300' },
  { zone: 'Подмышки', master: '150', top: '150' },
  { zone: 'Ноги до колена', master: '250', top: '250' },
  { zone: 'Бедра', master: '250', top: '250' },
  { zone: 'Ноги полностью', master: '420', top: '450' },
  { zone: 'Руки до локтя', master: '220', top: '220' },
  { zone: 'Руки полностью', master: '250', top: '250' },
  { zone: 'Усики', master: '50', top: '50' },
  { zone: 'Подбородок', master: '50', top: '50' },
  { zone: 'Шея', master: '100', top: '100' },
  { zone: 'Виски', master: '100', top: '100' },
  { zone: 'Брови', master: '80', top: '80' },
  { zone: 'Лицо полностью', master: '200', top: '200' },
  { zone: 'Линия живота', master: '50', top: '50' },
  { zone: 'Живот полностью', master: '150', top: '150' },
  { zone: 'Поясница', master: '150', top: '150' },
  { zone: 'Спина полностью', master: '250', top: '300' },
  { zone: 'Ягодицы', master: '120', top: '120' },
  { zone: 'Глиттер тату', master: '50', top: '50' },
  { zone: 'Лечение вросших волос', master: '350', top: '400' }
]

const MEN_ELEMENT_DATA: TableItem[] = [
  { zone: 'Глубокое бикини ', master: '—', top: '—' },
  { zone: 'Классическое бикини', master: '—', top: '—' },
  { zone: 'Классическое бикини + лобок', master: '—', top: '—' },
  { zone: 'Подмышки', master: '200', top: '200' },
  { zone: 'Ноги до колена', master: '350', top: '350' },
  { zone: 'Бедра', master: '350', top: '350' },
  { zone: 'Ноги полностью', master: '600', top: '600' },
  { zone: 'Руки до локтя', master: '300', top: '300' },
  { zone: 'Руки полностью', master: '400', top: '400' },
  { zone: 'Усики', master: '—', top: '—' },
  { zone: 'Подбородок', master: '—', top: '—' },
  { zone: 'Шея', master: '100', top: '100' },
  { zone: 'Виски', master: '100', top: '100' },
  { zone: 'Брови', master: '80', top: '80' },
  { zone: 'Лицо полностью', master: '—', top: '—' },
  { zone: 'Линия живота', master: '100', top: '100' },
  { zone: 'Живот полностью', master: '300', top: '300' },
  { zone: 'Поясница', master: '300', top: '300' },
  { zone: 'Спина полностью', master: '500', top: '500' },
  { zone: 'Ягодицы', master: '300', top: '300' },
  { zone: 'Глиттер тату', master: '50', top: '50' },
  { zone: 'Лечение вросших волос', master: '350', top: '400' }
]

@Component({
  selector: 'app-rustling-table',
  templateUrl: './rustling-table.component.html',
  styleUrls: ['./rustling-table.component.scss'],
})
export class RustlingTableComponent implements OnInit {
  male: Gender = { icon: 'male', color: '#3b77ff' }
  female: Gender = { icon: 'female', color: '#ff80ab' }
  gender: Gender = { icon: 'female', color: '#ff80ab' }

  displayedColumns: string[] = ['zone', 'master', 'top']
  maleDisplayedColumns: string[] = ['zone', 'top']
  femaleDisplayedColumns: string[] = ['zone', 'master', 'top']

  dataSource = ELEMENT_DATA

  constructor() {}

  ngOnInit() {}

  onGenderClick() {
    if (this.gender.icon === 'female') {
      this.dataSource = MEN_ELEMENT_DATA
      this.gender = this.male
      this.displayedColumns = this.maleDisplayedColumns
    } else {
      this.dataSource = ELEMENT_DATA
      this.gender = this.female
      this.displayedColumns = this.femaleDisplayedColumns
    }
  }
}
