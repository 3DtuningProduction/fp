import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ReviewsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [ReviewsComponent],
    exports: [ReviewsComponent]
})
export class ReviewsComponentModule {}
