import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RecognitionService } from './services/recognition.service';
import { CuriositiesComponent } from './Sites/Curiosities/Curiosities.component';
import { HomeComponent } from './Sites/Home/Home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'curiosities', component: CuriositiesComponent },
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CuriositiesComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule, provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase))
  ],
  exports:[RouterModule],
  providers: [RecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
