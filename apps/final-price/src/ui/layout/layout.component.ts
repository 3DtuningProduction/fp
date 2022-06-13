import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentModule } from '../header/header.component';
import { FooterComponentModule } from '../footer/footer.component';

@Component({
    selector: 'final-price-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, HeaderComponentModule, FooterComponentModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})
export class LayoutComponentModule {}
