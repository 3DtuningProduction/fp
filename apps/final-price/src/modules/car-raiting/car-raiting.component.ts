import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-car-raiting',
    templateUrl: './car-raiting.component.html',
    styleUrls: ['./car-raiting.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CarRaitingComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [CarRaitingComponent],
    exports: [CarRaitingComponent]
})
export class CarRaitingComponentModule {}
