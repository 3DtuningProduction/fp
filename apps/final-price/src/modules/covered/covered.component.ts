import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-covered',
    templateUrl: './covered.component.html',
    styleUrls: ['./covered.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CoveredComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [CoveredComponent],
    exports: [CoveredComponent]
})
export class CoveredComponentModule {}
