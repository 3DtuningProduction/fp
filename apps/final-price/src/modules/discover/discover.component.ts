import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-discover',
    templateUrl: './discover.component.html',
    styleUrls: ['./discover.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DiscoverComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [DiscoverComponent],
    exports: [DiscoverComponent]
})
export class DiscoverComponentModule {}
