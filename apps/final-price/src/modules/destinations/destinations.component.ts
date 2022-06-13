import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DestinationsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [DestinationsComponent],
    exports: [DestinationsComponent]
})
export class DestinationsComponentModule {}
