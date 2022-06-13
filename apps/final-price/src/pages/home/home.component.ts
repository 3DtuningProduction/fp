import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponentModule } from '../../ui/layout/layout.component';
import { SearchBlockComponentModule } from '../../modules/search/search.component';
import { AboutComponentModule } from '../../modules/about/about.component';
import { CarSliderComponentModule } from '../../modules/car-slider/car-slider.component';
import { TestimonialsComponentModule } from '../../modules/testimonials/testimonials.component';
import { DiscoverComponentModule } from '../../modules/discover/discover.component';
import { CategoriesComponentModule } from '../../modules/categories/categories.component';
import { FriendsSliderComponentModule } from '../../modules/friends-slider/friends-slider.component';

@Component({
    selector: 'final-price-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    }
  ]), LayoutComponentModule, SearchBlockComponentModule, AboutComponentModule, CarSliderComponentModule, TestimonialsComponentModule, DiscoverComponentModule, CategoriesComponentModule, FriendsSliderComponentModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeComponentModule {}
