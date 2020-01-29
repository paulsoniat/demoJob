import { Component, OnInit } from '@angular/core';
import { apiService } from '../services/api.service';
import { Tweet } from './tweets';

@Component({
  selector: 'app-tweeter',
  templateUrl: './tweeter.component.html',
  styleUrls: ['./tweeter.component.css']
})
export class TweeterComponent implements OnInit {

  constructor(private apiService: apiService) { }
  public dataLoaded: boolean;
  public tweetData: Array<Tweet>;
  public tweetDataFromServer: Array<string>;

  ngOnInit(){
    this.apiService.getContacts().subscribe((res)=>{
    this.tweetData = res;
    this.dataLoaded = true;    
    });
  }
}
