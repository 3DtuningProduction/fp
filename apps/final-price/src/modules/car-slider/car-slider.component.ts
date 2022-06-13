import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';

SwiperCore.use([FreeMode, Pagination, Navigation]);

@Component({
    selector: 'final-price-car-slider',
    templateUrl: './car-slider.component.html',
    styleUrls: ['./car-slider.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CarSliderComponent implements OnInit {
    public readonly categorySwiperOptions: SwiperOptions = {
        slidesPerView: 3,
        navigation: true,
        watchSlidesProgress: true
    }

    public readonly categories: Array<{title: string; img: string; slug: string}> = [
        {
            title: 'Category Name',
            img: '/assets/car1.png',
            slug: 'cat'
        },
        {
            title: 'Category Name',
            img: '/assets/car2.png',
            slug: 'cat'
        },
        {
            title: 'Category Name',
            img: '/assets/car3.png',
            slug: 'cat'
        },
        {
            title: 'Category Name',
            img: '/assets/car4.png',
            slug: 'cat'
        },
        {
            title: 'Category Name',
            img: '/assets/car1.png',
            slug: 'cat'
        },
        {
            title: 'Category Name',
            img: '/assets/car2.png',
            slug: 'cat'
        },
        {
            title: 'Category Name',
            img: '/assets/car3.png',
            slug: 'cat'
        },
        {
            title: 'Category Name',
            img: '/assets/car4.png',
            slug: 'cat'
        }
    ]
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, SwiperModule],
    declarations: [CarSliderComponent],
    exports: [CarSliderComponent]
})
export class CarSliderComponentModule {}
