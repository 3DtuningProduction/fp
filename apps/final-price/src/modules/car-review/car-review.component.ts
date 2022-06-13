import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-car-review',
    templateUrl: './car-review.component.html',
    styleUrls: ['./car-review.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CarReviewComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [CarReviewComponent],
    exports: [CarReviewComponent]
})
export class CarReviewComponentModule {}
