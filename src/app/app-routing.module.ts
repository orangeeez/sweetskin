import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then(mod => mod.MainModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then(m => m.ServicesModule),
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./reviews/reviews.module').then(m => m.ReviewsModule),
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
