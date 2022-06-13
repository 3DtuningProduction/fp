import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponentModule } from '../../ui/layout/layout.component';

@Component({
    selector: 'final-price-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: SearchComponent
    }
  ]), LayoutComponentModule],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})
export class SearchComponentModule {}
