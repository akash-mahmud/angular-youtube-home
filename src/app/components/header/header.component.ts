import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
showSearchInput:boolean = false

closeSearchInput(){
  this.showSearchInput = false
}
openSearchInput (){
  this.showSearchInput = true
}
}
