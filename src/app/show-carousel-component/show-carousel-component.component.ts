import { Component, OnInit } from '@angular/core';
import { Ishowdata } from '../ishowdata';
import { ShowdataService } from '../showdata.service';
import { CarouselService } from '../carousel.service';
import { Icarousel } from '../icarousel';

@Component({
  selector: 'app-show-carousel-component',
  templateUrl: './show-carousel-component.component.html',
  styleUrls: ['./show-carousel-component.component.css']
})
export class ShowCarouselComponentComponent implements OnInit {
  current: Icarousel[] = [];
  showdata:Ishowdata[] = []
  


  constructor(private showdataservice:ShowdataService) { }

  ngOnInit(): void {

    this.showdataservice.getshowdata().subscribe(data => {
     this.showdata = data

    })
  }

  slideConfig = {"slidesToShow": 7, "slidesToScroll": 6, "arrows":true, "infinte": false};



}
