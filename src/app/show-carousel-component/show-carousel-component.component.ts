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
  action:Ishowdata[] = []
  adventure:Ishowdata[] = []
  thriller:Ishowdata[] = []
  comedy:Ishowdata[] = []
  sci:Ishowdata[] = []
  romance:Ishowdata[] = []
  drama:Ishowdata[] = []


  constructor(private showdataservice:ShowdataService) { }

  ngOnInit(): void {

    this.showdataservice.getshowdata().subscribe(data => {
     this.showdata = data
     this.action = this.showdata.filter(data => data.genres.includes('Action'))
     this.adventure = this.showdata.filter(data => data.genres.includes('Adventure'))
     this.thriller = this.showdata.filter(data => data.genres.includes('Thriller'))
     this.comedy = this.showdata.filter(data => data.genres.includes('Comedy'))
     this.sci = this.showdata.filter(data => data.genres.includes('Science-Fiction'))
     this.romance = this.showdata.filter(data => data.genres.includes('Romance'))
     this.drama = this.showdata.filter(data => data.genres.includes('Drama'))

    })
  }

  slideConfig = {"slidesToShow": 8, "slidesToScroll": 6, "arrows":true, "infinte": false};



}
