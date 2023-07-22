import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MusicAudioComponent } from './components/music-audio/music-audio.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { PhotograpyComponent } from './components/photograpy/photograpy.component';
import { BusinessComponent } from './components/business/business.component';
import { AIServicesComponent } from './components/ai-services/ai-services.component';
import { ShowallComponent } from './components/showall/showall.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    MusicAudioComponent,
    ProgrammingComponent,
    PhotograpyComponent,
    BusinessComponent,
    AIServicesComponent,
    ShowallComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
