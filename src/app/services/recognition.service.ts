import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  constructor(public firestore: Firestore) { }
  async getDocument() {
   
      return (
       await getDocs(query(collection(this.firestore, 'Daily Curiosity')))
      ).docs.map((robots) => robots.data());
     
}
}
