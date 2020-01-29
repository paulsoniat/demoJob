import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';  
import {ContactComponent} from './pages/contact/contact.component'; 
import { AppComponent } from './app.component';
import { TweeterComponent } from './pages/tweeter/tweeter.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [{path: 'tweets', component: TweeterComponent},  
{path: 'about',component: AboutComponent},  
{path: 'courses',component: ContactComponent},
{path: '', component: HomeComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
