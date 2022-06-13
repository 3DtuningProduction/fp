import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-car-feauters',
    templateUrl: './car-feauters.component.html',
    styleUrls: ['./car-feauters.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CarFeautersComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [CarFeautersComponent],
    exports: [CarFeautersComponent]
})
export class CarFeautersComponentModule {}
