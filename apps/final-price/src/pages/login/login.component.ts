import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponentModule } from '../../ui/layout/layout.component';

@Component({
    selector: 'final-price-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: LoginComponent
    }
  ]), LayoutComponentModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginComponentModule {}
