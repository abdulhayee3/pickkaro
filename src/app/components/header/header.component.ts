import { Component } from '@angular/core';
import { faCartShopping, faHome, faSignIn } from '@fortawesome/free-solid-svg-icons';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})
export class HeaderComponent {

faHome = faHome;
faSignIn = faSignIn;
faCartShopping = faCartShopping

}