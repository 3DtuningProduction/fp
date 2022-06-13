import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'final-price-tesms',
    templateUrl: './tesms.component.html',
    styleUrls: ['./tesms.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class TesmsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            pathMatch: 'full',
            component: TesmsComponent
        }
    ])],
    declarations: [TesmsComponent],
    exports: [TesmsComponent]
})
export class TesmsComponentModule {}
