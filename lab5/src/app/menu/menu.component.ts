import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  show = false;
  share() {
    console.log('The product has been shared!');
  };




}
