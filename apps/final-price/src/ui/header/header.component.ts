import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'final-price-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderComponentModule {}
