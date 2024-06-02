import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { TestEntity } from '../models/TestEntity';

/**
 * @description
 * @class
 */
@Injectable()
export class TestService {

  constructor(public firestore: Firestore) {}

  async getQuestions(): Promise<TestEntity[]> {
    const querySnapshot: QuerySnapshot = await getDocs(query(collection(this.firestore, 'Test')));
    const testEntities: TestEntity[] = [];

    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      
      const docData = doc.data();
  
     
      for (const key in docData) {
        if (docData.hasOwnProperty(key)) {
          const question = docData[key];
          const questionData = new Map<string, string>();
          questionData.set('id', question.id || ''); 
          questionData.set('text', question.text || ''); 
          questionData.set('img', question.img || ''); 
          questionData.set('Answers', question.Answers || ''); 
          
          const questionEntity = new TestEntity(questionData);
          testEntities.push(questionEntity);
        }
      }
      
    });

    return testEntities;
  }
  editQuestion(id:string, datos:any){
    alert("TODO")
  }
}
