import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListingService {
 private messageStream = new BehaviorSubject<string>('default value of message');
 currentMessage = this.messageStream.asObservable()
 constructor(){}

 updateMessage(newMessage: string){
   this.messageStream.next(newMessage);

 }

}
