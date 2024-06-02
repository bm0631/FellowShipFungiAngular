import { Injectable } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: Firestore) { }

  async editarDocumento(coleccion: string,document:string, id: string, datos: any) {
    try {
      const docRef = doc(this.firestore, coleccion,document,id);

      await updateDoc(docRef, datos);

      console.log('Documento editado correctamente');
    } catch (error) {
      console.error('Error al editar documento:', error);
      throw new Error('Ocurrió un error al editar el documento');
    }
  }
}
