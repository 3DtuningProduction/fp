import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FaqComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [FaqComponent],
    exports: [FaqComponent]
})
export class FaqComponentModule {}
