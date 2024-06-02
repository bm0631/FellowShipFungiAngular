import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CuriositiesService } from './services/Curiosities.service';
import { CuriositiesComponent } from './Sites/curiosities/Curiosities.component';
import { HomeComponent } from './Sites/home/Home.component';
import { EditarCuriosityComponent } from './Sites/curiosities/edit/EditCuriosity.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'curiosities', component: CuriositiesComponent },
  { path: 'edit-curiosity', component: EditarCuriosityComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CuriositiesComponent,EditarCuriosityComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule, provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FormsModule 
  ],
  exports:[RouterModule],
  providers: [CuriositiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
