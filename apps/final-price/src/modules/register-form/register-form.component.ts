import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class RegisterFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [RegisterFormComponent],
    exports: [RegisterFormComponent]
})
export class RegisterFormComponentModule {}
