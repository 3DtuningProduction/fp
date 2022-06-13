import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class TestimonialsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [TestimonialsComponent],
    exports: [TestimonialsComponent]
})
export class TestimonialsComponentModule {}
