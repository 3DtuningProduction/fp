import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-endless',
    templateUrl: './endless.component.html',
    styleUrls: ['./endless.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class EndlessComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [EndlessComponent],
    exports: [EndlessComponent]
})
export class EndlessComponentModule {}
