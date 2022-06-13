import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-reset-form',
    templateUrl: './reset-form.component.html',
    styleUrls: ['./reset-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ResetFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [ResetFormComponent],
    exports: [ResetFormComponent]
})
export class ResetFormComponentModule {}
