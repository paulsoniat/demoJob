import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';  
import {ContactComponent} from './pages/contact/contact.component'; 
import { AppComponent } from './app.component';
import { TweeterComponent } from './tweeter/tweeter.component'

const routes: Routes = [{path: 'home', component: TweeterComponent},  
{path: 'about',component: AboutComponent},  
{path: 'courses',component: ContactComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
