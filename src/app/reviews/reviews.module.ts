import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReviewsComponent } from './reviews/reviews.component'
import { ReviewsRoutingModule } from './reviews-routing.module'
import { SharedModule } from '@app/shared/shared.module';
import { ReviewItemComponent } from './review-item/review-item.component'

@NgModule({
  declarations: [ReviewsComponent, ReviewItemComponent],
  imports: [CommonModule, ReviewsRoutingModule, SharedModule],
})
export class ReviewsModule {}
