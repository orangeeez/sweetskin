import { Component, OnInit } from '@angular/core'
import { TableItem } from '@app/models/services/table-item'
import { Gender } from '@app/models/services/gender'

const ELEMENT_DATA: TableItem[] = [
  { zone: 'Глубокое бикини ', master: '270', top: '300' },
  { zone: 'Классическое бикини ', master: '150', top: '150' },
  { zone: 'Классическое бикини + лобок ', master: '200', top: '200' },
  { zone: 'Подмышки ', master: '100', top: '100' },
  { zone: 'Ноги до колена', master: '190', top: '200' },
  { zone: 'Бедра', master: '190', top: '200' },
  { zone: 'Ноги полностью', master: '350', top: '380' },
  { zone: 'Руки до локтя ', master: '180', top: '180' },
  { zone: 'Руки полностью ', master: '220', top: '220' },
  { zone: 'Усики ', master: '50', top: '50' },
  { zone: 'Подбородок ', master: '50', top: '50' },
  { zone: 'Шея', master: '—', top: '—' },
  { zone: 'Виски ', master: '50', top: '50' },
  { zone: 'Брови ', master: '80', top: '80' },
  { zone: 'Лицо полностью ', master: '140', top: '140' },
  { zone: 'Линия живота ', master: '40', top: '40' },
  { zone: 'Живот полностью ', master: '120', top: '120' },
  { zone: 'Поясница ', master: '100', top: '100' },
  { zone: 'Спина полностью ', master: '200', top: '200' },
  { zone: 'Ягодицы ', master: '100', top: '100' },
  { zone: 'Глиттер тату ', master: '50', top: '50' },
  { zone: 'Лечение вросших волос', master: '200', top: '250' },
]

const MEN_ELEMENT_DATA: TableItem[] = [
  { zone: 'Глубокое бикини ', master: '450', top: '450' },
  { zone: 'Классическое бикини ', master: '250', top: '250' },
  { zone: 'Классическое бикини +лобок ', master: '300', top: '300' },
  { zone: 'Подмышки ', master: '150', top: '150' },
  { zone: 'Ноги до колена ', master: '300', top: '300' },
  { zone: 'Бедра ', master: '300', top: '300' },
  { zone: 'Ноги полностью ', master: '550', top: '550' },
  { zone: 'Руки до локтя ', master: '200', top: '200' },
  { zone: 'Руки полностью ', master: '250', top: '250' },
  { zone: 'Усики ', master: '—', top: '—' },
  { zone: 'Подбородок ', master: '—', top: '—' },
  { zone: 'Шея ', master: '100', top: '100' },
  { zone: 'Виски ', master: '100', top: '100' },
  { zone: 'Брови ', master: '80', top: '80' },
  { zone: 'Лицо полностью ', master: '—', top: '—' },
  { zone: 'Линия живота ', master: '100', top: '100' },
  { zone: 'Живот полностью ', master: '250', top: '250' },
  { zone: 'Поясница ', master: '200', top: '200' },
  { zone: 'Спина полностью ', master: '400', top: '400' },
  { zone: 'Ягодицы ', master: '200', top: '200' },
  { zone: 'Глиттер тату ', master: '50', top: '50' },
  { zone: 'Лечение вросших волос ', master: '200', top: '200' },
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
