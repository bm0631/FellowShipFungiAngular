import { Component, OnInit } from "@angular/core";
import { RecognitionService } from "src/app/services/recognition.service";

@Component({
  selector: "app-Curiosities",
  templateUrl: "./Curiosities.component.html",
  styleUrls: ["./Curiosities.component.css"]
})

export class CuriositiesComponent implements OnInit {
  documentData: any; 
  constructor(private recognitionService: RecognitionService) { 

  }

  ngOnInit() {
    this.getDocumentData();
  }
  async getDocumentData() {
    try {
      this.documentData = await this.recognitionService.getDocument();
      console.log('Datos del documento:', this.documentData.length);
    } catch (error) {
      console.error('Error al obtener los datos del documento:', error);
    }
  }
}
