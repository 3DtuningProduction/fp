import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';
import { RouterModule } from '@angular/router';

SwiperCore.use([FreeMode, Pagination, Navigation, Pagination]);

@Component({
    selector: 'final-price-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CategoriesComponent implements OnInit {
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
    imports: [CommonModule, SwiperModule, RouterModule],
    declarations: [CategoriesComponent],
    exports: [CategoriesComponent]
})
export class CategoriesComponentModule {}
