import { Component, OnInit } from '@angular/core'
import { TableItem } from '@app/models/services/table-item'
import { Gender } from '@app/models/services/gender'

const ELEMENT_DATA: TableItem[] = [
  { zone: 'Комбинированная чистка лица с уходом по типу кожи', master: '700 ', top: '700/800' },
  { zone: 'Ультразвуковая чистка лица с уходом по типу кожи ', master: '500', top: '500/600' }, 
  { zone: 'Чистка лица с пилингом', master: '800', top: '900' },
  { zone: 'Чистка плечей/поясницы', master: '600', top: '700' },
  { zone: 'Чистка спины полностью', master: '800-…', top: '1000-…' },
  { zone: 'Пилинги', master: '', top: '', bold: true },
  { zone: 'Поверхностные пилинги (Миндальный, Азелоиновый, Салициловый, Молочный…) (лицо/лицо+шея)', master: '500/700', top: '500/700' }, 
  { zone: 'Поверхностно-срединные пилинги (Гликолевый, Осветляющий, Пировиноградный…)(лицо/лицо+шея)', master: '600/800', top: '600/800' },
  { zone: 'Срединные пилинги (Джесснера, ТСА) (цена зависит от кол-ва слоев)', master: '700-…', top: '800-…' },
  { zone: 'Уходовые процедуры', master: '', top: '', bold: true },
  { zone: 'Уход по типу кожи с массажем (для сухой обезвоженной/жирной/проблемной/чувствительной кожи/кожи с возрастными изменениями/пигментацией, а также постакне)', master: '600', top: '700' },
  { zone: 'Уход по типу кожи «Perfect skin» (процедура на выход, включает ультразвуковое очищение и карбокситерапию)', master: '800', top: '900' },
  { zone: 'SPA-процедура «Relax» (максимальное расслабление благодаря нейроседативному массажу, ароматерапии и особенной атмосфере со свечами)', master: '700', top: '800' },
  { zone: 'Карбокситерапия', master: '500', top: '600' },
  { zone: 'Массажи', master: '', top: '', bold: true },
  { zone: 'Хиропластический массаж с уходом', master: '600', top: '700' },
  { zone: 'Хиропластический массаж с электропорацией /с микротоковой терапией', master: '750', top: '800' },
  { zone: 'Нейроседативный/лимфодренажный массаж с уходом', master: '600', top: '700' },
  { zone: 'Аппаратная косметология', master: '', top: '', bold: true },
  { zone: 'Электропорация (аппаратная неинвазивная МЕЗОТЕРАПИЯ) /с уходом', master: '500/600', top: '500/600' }, 
  { zone: 'Микротоковая терапия лицо+шея+декольте/с уходом по типу кожи', master: '500/600', top: '500/600' },
  { zone: 'Микротоковая терапия с электропорацией', master: '750', top: '750' },
  { zone: 'Ультразвуковая чистка с уходом/с массажем', master: '500/700', top: '600/800' },
  { zone: 'Интимное отбеливание', master: '', top: '', bold: true },
  { zone: 'И.о. подмышечных впадин', master: '600', top: '600' },
  { zone: 'И.о. зоны глубокого бикини', master: '800', top: '800' },
  { zone: 'И.о. зоны лобка', master: '500', top: '500' },
  { zone: 'И.о. зоны больших половых губ', master: '500', top: '--' },
  { zone: 'И.о. зоны вокруг ануса', master: '500', top: '500' },
  { zone: 'И.о. линии живот', master: '400', top: '500' },
  { zone: 'Дополнительно', master: '', top: '', bold: true },
  { zone: 'Альгинатная маска (увлажняющая)с сывороткой', master: '130', top: '150' },
  { zone: 'Лечение вросших волос пилингами', master: '350-…', top: '350-…' }
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
