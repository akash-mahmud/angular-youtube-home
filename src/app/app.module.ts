import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LucideAngularModule, File, Home, Menu, UserCheck , User, Upload, Bell, Mic , Search} from 'lucide-angular';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({File, Home, Menu, UserCheck, User, Upload , Bell, Mic, Search})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
