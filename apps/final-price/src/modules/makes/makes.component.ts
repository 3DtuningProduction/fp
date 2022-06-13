import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-makes',
    templateUrl: './makes.component.html',
    styleUrls: ['./makes.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class MakesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [MakesComponent],
    exports: [MakesComponent]
})
export class MakesComponentModule {}
