import { Component, OnInit } from '@angular/core';
import { apiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'demoJobTest';
  public dataLoaded: boolean;
  public tweetData: Array<string>;
  constructor(private apiService: apiService){ }
  
  ngOnInit(){
    console.log("In init")
    this.tweetData = [
      "Thanks to our recent partnership with @Amazon, we continue to innovate at the pump. At #CES2020 we unveiled a new Alexa skill so consumers can use voice-activation to pay for fuel at more than 11,500 ExxonMobil stations across the U.S. https://t.co/3ZLeuSQ3OU",
      "Chairman and CEO Darren Woods weighs in on the future of energy at the International Petroleum Technology Conference 2020. #IPTC2020 https://t.co/EGkUds3HrE",
      "Using the latest technology and science, we’re racing into the future of electric vehicle technology with Formula E.⚡️ https://t.co/IAaWfJLLYd",
      "@BruceA_Ecolab Thanks for sharing, Bruce! As you know, life on the rig is a one-of-a-kind experience. And you’re right about that food! Do any of these shots look familiar? https://t.co/NGGBHIzy2J",
      "See our own Vijay Swarup weigh in on quantum technology and the future at #CES2020 right here: https://t.co/S5IQPfAjxQ",
      "What we do today affects the world’s energy tomorrow. See how natural gas helps work toward a cleaner-energy future. https://t.co/Du0Bs65pBZ https://t.co/6K8PQbHexb",
      "Learn about our sustainability efforts: https://t.co/Nlm1CXd0DO https://t.co/krmClHoWFO",
      "Every New Year’s Eve, Times Square buzzes with energy. Join us as we count it down. https://t.co/gxsHXiAqj8",
      "Ever wonder what life is like on one of the world’s largest offshore platforms? https://t.co/9ZJGVvb9YK",
      "We’ve begun production on the Liza field offshore Guyana, marking a historic feat less than five years after discovery. Read more about the achievement: https://t.co/oodq7cM4VK https://t.co/4oVMWy5LIx"
    ]
    this.dataLoaded = true; 
    
        this.apiService.getContacts().subscribe((res)=>{
    });
  }
}
