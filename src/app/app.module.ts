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
import { TestService } from './services/Test.service';
import { TestComponent } from './Sites/test/test.component';
import { EditTestComponent } from './Sites/test/edit/EditTest.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'curiosities', component: CuriositiesComponent },
  { path: 'edit-curiosity', component: EditarCuriosityComponent },
  { path: 'test', component: TestComponent },
  { path: 'edit-test', component: EditTestComponent },
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CuriositiesComponent,EditarCuriosityComponent,TestComponent,EditTestComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule, provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FormsModule 
  ],
  exports:[RouterModule],
  providers: [CuriositiesService,TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
