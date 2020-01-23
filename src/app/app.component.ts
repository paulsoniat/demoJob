import { Component, OnInit } from '@angular/core';
import { apiService } from './api.service';
import { Tweet } from './tweets';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private apiService: apiService, private themeService: ThemeService){ }
  title = 'demoJobTest';
  public dataLoaded: boolean;
  public tweetData: Array<Tweet>;
  public tweetDataFromServer: Array<string>;
  
  toggle() {
    const active = this.themeService.getActiveTheme() ;
    console.log(active);
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  ngOnInit(){
    this.apiService.getContacts().subscribe((res)=>{
      this.tweetData = res;
    this.dataLoaded = true;    
    });
  }
}
