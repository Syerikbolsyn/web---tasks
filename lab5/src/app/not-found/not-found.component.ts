import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  show = false;
  share() {
    console.log('The product has been shared!');
  };

  change(): void {
    this.show = !this.show;
  }



}
