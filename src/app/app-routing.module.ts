import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowallComponent } from './components/showall/showall.component';
import { MusicAudioComponent } from './components/music-audio/music-audio.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { BusinessComponent } from './components/business/business.component';
import { AIServicesComponent } from './components/ai-services/ai-services.component';
import { PhotograpyComponent } from './components/photograpy/photograpy.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
 
  {path : "" , component : ShowallComponent},
  {path : "musicaudio" ,component:MusicAudioComponent},
  {path : "programming" , component:ProgrammingComponent},
  {path : "business" , component:BusinessComponent},
  {path : "aiservices" , component:AIServicesComponent},
  {path : "photography" , component:PhotograpyComponent},
  {path:"login" , component:LoginComponent},
  {path:"signup" , component:SignupComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
