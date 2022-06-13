import { Component, OnInit, ViewEncapsulation, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'final-price-search-block',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SearchBlockComponent implements OnInit {
    @Input() public type: 'main' = 'main';

    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SearchBlockComponent],
    exports: [SearchBlockComponent]
})
export class SearchBlockComponentModule {}
