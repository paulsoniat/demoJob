import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tweet } from './tweets';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  apiURL: string = '/tweetMe';

  constructor(private httpClient: HttpClient) {}

  public createTweet(Tweet: Tweet){}

  public updateTweet(Tweet: Tweet){}

  public getTweetByName(name: string){}

  public getCustomers(url?: string){}

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";    
  
  public getContacts(){
    return this.httpClient.get<Tweet[]>(`${this.apiURL}`);
}

}
