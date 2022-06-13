import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-why-fp',
    templateUrl: './why-fp.component.html',
    styleUrls: ['./why-fp.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WhyFpComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [WhyFpComponent],
    exports: [WhyFpComponent]
})
export class WhyFpComponentModule {}
