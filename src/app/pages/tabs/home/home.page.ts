import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions , Autoplay , Pagination} from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit , AfterContentChecked{
  accounts:any[]=[];
  bannerConfig: SwiperOptions = {};
  featureConfig: SwiperOptions = {};
  features : any[] = [];
  transactions : any[] = [];
  constructor() { }

  ngOnInit() {
    this.accounts=[
      {id:1 ,acc_no:'12345678947' , balance:'8000'},
      {id:2 ,acc_no:'25243698644' , balance:'9000'},
      {id:3 ,acc_no:'23659875691' , balance:'5000'},
      {id:4 ,acc_no:'56987326351' , balance:'6000'},
    ]
    this.features = [
      { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
      { id: 2, color: 'white', icon: 'send', name: 'Request' },
      { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
      { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
      { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
    ];
    this.transactions=[
      { id: 1, to: 'Prathmesh', date: '2023-05-22', amount: 5000 },
      { id: 2, to: 'Alok', date: '2023-03-02', amount: 7000 },
      { id: 3, to: 'Nishant', date: '2023-07-28', amount: -3250 },
      { id: 4, to: 'Prasad', date: '2023-01-09', amount: 1000 },
      { id: 5, to: 'Aryan', date: '2023-04-13', amount: -800 },
    ];
  }
  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true }
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }
}
