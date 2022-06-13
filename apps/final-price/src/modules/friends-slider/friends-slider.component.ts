import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperModule } from 'swiper/angular';

@Component({
    selector: 'final-price-friends-slider',
    templateUrl: './friends-slider.component.html',
    styleUrls: ['./friends-slider.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FriendsSliderComponent implements OnInit {
    public readonly categorySwiperOptions: SwiperOptions = {
        slidesPerView: 4,
        slidesPerGroup: 3,
        spaceBetween: 16,
        navigation: {
            enabled: true,
            // nextEl: '.slider-nav-btn.--next',
            // prevEl: '.slider-nav-btn.--prev'
        },
        watchSlidesProgress: true,
        observer: true,
        observeParents: true
    }

    public readonly categories: Array<{title: string; img: string; slug: string}> = [
        {
            title: 'BrandName',
            img: '/assets/f1.png',
            slug: 'cat'
        },
        {
            title: 'BrandName',
            img: '/assets/f2.png',
            slug: 'cat'
        },
        {
            title: 'BrandName',
            img: '/assets/f3.png',
            slug: 'cat'
        },
        {
            title: 'BrandName',
            img: '/assets/f4.png',
            slug: 'cat'
        },
        {
            title: 'BrandName',
            img: '/assets/f5.png',
            slug: 'cat'
        },

    ]
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, SwiperModule],
    declarations: [FriendsSliderComponent],
    exports: [FriendsSliderComponent]
})
export class FriendsSliderComponentModule {}
