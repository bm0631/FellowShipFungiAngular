import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { CuriosityEntity } from '../models/CuriosityEntity';

@Injectable({
  providedIn: 'root'
})
export class CuriositiesService {

  constructor(public firestore: Firestore) {}

  async getCuriosities(): Promise<CuriosityEntity[]> {
    const querySnapshot: QuerySnapshot = await getDocs(query(collection(this.firestore, 'Daily Curiosity')));
    const curiosityEntities: CuriosityEntity[] = [];

    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      
      const docData = doc.data();
  
     
      for (const key in docData) {
        if (docData.hasOwnProperty(key)) {
          const curiosity = docData[key];
          const curiosityData = new Map<string, string>();
          curiosityData.set('id', curiosity.id || ''); 
          curiosityData.set('text', curiosity.text || ''); 
          curiosityData.set('img', curiosity.img || ''); 
          
          const curiosityEntity = new CuriosityEntity(curiosityData);
          curiosityEntities.push(curiosityEntity);
        }
      }
      
    });

    return curiosityEntities;
  }
  editCuriosity(id:string, datos:any){
    alert("TODO")
  }
}
