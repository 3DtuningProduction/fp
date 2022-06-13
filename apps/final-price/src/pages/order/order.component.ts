import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'final-price-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class OrderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            pathMatch: 'full',
            component: OrderComponent
        }
    ])],
    declarations: [OrderComponent],
    exports: [OrderComponent]
})
export class OrderComponentModule {}
