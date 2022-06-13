import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CarItemComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [CarItemComponent],
    exports: [CarItemComponent]
})
export class CarItemComponentModule {}
