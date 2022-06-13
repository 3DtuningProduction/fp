import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LoaderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [LoaderComponent],
    exports: [LoaderComponent]
})
export class LoaderComponentModule {}
