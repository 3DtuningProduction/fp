import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'final-price-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FriendsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [FriendsComponent],
    exports: [FriendsComponent]
})
export class FriendsComponentModule {}
