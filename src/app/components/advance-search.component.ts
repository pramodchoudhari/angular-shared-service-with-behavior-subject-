import { Component, OnInit, Injector, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListingService } from './listing-service';

@Component({
    selector: 'advance-search',
    template: `
        <h1>Adavance search component</h1>
        <p>{{message}}</p>
        <button (click)="otherMessage()">New Message</button>

    `,
})
export class AdvanceSearchComponent {
  message: string;

  constructor(@Inject(ListingService) private listingService){
  }

  ngOnInit() {
  //subscribe in the component to the current message
   this.listingService.currentMessage.subscribe( message => {
   this.message = message;
   })
  }
  
  otherMessage(){
    this.listingService.updateMessage("Hello from advance search");
  }


}