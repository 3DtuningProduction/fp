import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponentModule } from '../../ui/layout/layout.component';

@Component({
    selector: 'final-price-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, RouterModule.forChild([
        {
            path: ':id',
            component: CarComponent
        }
    ]), LayoutComponentModule],
    declarations: [CarComponent],
    exports: [CarComponent]
})
export class CarComponentModule {}
