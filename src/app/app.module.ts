import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdvanceSearchComponent} from './components/advance-search.component';
import { ListingComponent} from './components/listing.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,ListingComponent,AdvanceSearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
