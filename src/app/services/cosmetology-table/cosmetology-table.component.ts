import { Component, OnInit } from '@angular/core'
import { TableItem } from '@app/models/services/table-item'
import { Gender } from '@app/models/services/gender'

const ELEMENT_DATA: TableItem[] = [
  { zone: 'Чистка лица ', master: '500', top: '500' },
  { zone: 'Чистка лица+уход ', master: '600', top: '600' },
  { zone: 'Чистка + карбокситерапия ', master: '700', top: '700' },
  { zone: 'Уход по типу кожи (с массажем) ', master: '500', top: '500' },
  { zone: 'Уход по типу кожи ', master: '400', top: '400' },
  { zone: 'Уз чистка + уход ', master: '400', top: '400' },
  { zone: 'Карбокситерапия ', master: '400', top: '400' },
  { zone: 'Массаж классический ', master: '300', top: '300' },
  { zone: 'Массаж пластический/по Жаке ', master: '300', top: '300' },
  { zone: 'Пилинг Миндальный (лицо) ', master: '450', top: '450' },
  { zone: 'Пилинг Миндальный (лицо+шея)  ', master: '500', top: '500' },
  {
    zone: 'Пилинг Джеснера поверхность-срединный (лицо) ',
    master: '500',
    top: '500',
  },
  {
    zone: 'Пилинг Джеснера поверхностно-срединный (лицо+шея) ',
    master: '600',
    top: '600',
  },
  { zone: 'Микротоковая терапия (лицо) ', master: '350', top: '350' },
  {
    zone: 'Микротоковая терапия (лицо+шея+декольте) ',
    master: '400',
    top: '400',
  },
]

@Component({
  selector: 'app-cosmetology-table',
  templateUrl: './cosmetology-table.component.html',
  styleUrls: ['./cosmetology-table.component.scss'],
})
export class CosmetologyTableComponent implements OnInit {
  male: Gender = { icon: 'male', color: '#3b77ff' }
  female: Gender = { icon: 'female', color: '#ff80ab' }
  displayedColumns: string[] = ['zone', 'master', 'top']
  dataSource = ELEMENT_DATA

  constructor() {}

  ngOnInit() {}
}
