import { Component, OnInit } from '@angular/core';
import { apiService } from './api.service';
import { Tweet } from './tweets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'demoJobTest';
  public dataLoaded: boolean;
  public tweetData: Array<Tweet>;
  public tweetDataFromServer: Array<string>;
  constructor(private apiService: apiService){ }
  
  ngOnInit(){
    this.apiService.getContacts().subscribe((res)=>{
      this.tweetData = res;
    this.dataLoaded = true;    
    });
  }
}
