import { Component, OnInit, AfterContentChecked } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit , AfterContentChecked{
  bannerConfig: SwiperOptions ={};
  cards: any[] = [];
  constructor() { }
  ngOnInit() {
    this.cards = [
      { id: 1, company_img: 'assets/images/mastercard.png', card_no: '5786 8945 9098 1100', card_holder: 'Aryan', exp_date: '08/27' },
      { id: 2, company_img: 'assets/images/visa.png', card_no: '2006 7091 2014 8766', card_holder: 'Prathmesh', exp_date: '11/29' },
      { id: 3, company_img: 'assets/images/mastercard.png', card_no: '4016 3081 2056 7890', card_holder: 'Alok', exp_date: '06/28' },
      { id: 3, company_img: 'assets/images/visa.png', card_no: '4016 3081 2056 7890', card_holder: 'Nishant', exp_date: '06/27' },
      { id: 3, company_img: 'assets/images/mastercard.png', card_no: '4016 3081 2056 7890', card_holder: 'Prasad', exp_date: '06/28' }
    ];
  }
  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
      pagination: { clickable: true }
    };
  }

}
