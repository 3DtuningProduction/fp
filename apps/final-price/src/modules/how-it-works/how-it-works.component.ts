import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-how-it-works',
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HowItWorksComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [HowItWorksComponent],
    exports: [HowItWorksComponent]
})
export class HowItWorksComponentModule {}
