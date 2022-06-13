import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'final-price-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PrivacyComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            pathMatch: 'full',
            component: PrivacyComponent
        }
    ])],
    declarations: [PrivacyComponent],
    exports: [PrivacyComponent]
})
export class PrivacyComponentModule {}
