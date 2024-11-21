import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  faShoppingBasket = faShoppingBasket;
  faHeart = faHeart;
  faSearch = faSearch;
  faStar = faStar;

  ngOnInit(){ }

  url:string = "./assets/images/p1.jpg";

  changeImage(event:any){
    this.url = event.target.src;
    console.log()
  }

}