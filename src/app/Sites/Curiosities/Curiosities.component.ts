import { Component, OnInit } from "@angular/core";
import { CuriosityEntity } from "src/app/models/CuriosityEntity";
import { CuriositiesService } from "src/app/services/Curiosities.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-Curiosities",
  templateUrl: "./Curiosities.component.html",
  styleUrls: ["./Curiosities.component.css"]
})

export class CuriositiesComponent implements OnInit {
  curiosities: CuriosityEntity[] = []; 

  constructor(private router: Router,private curiositiesService: CuriositiesService) { 

  }

  ngOnInit() {
    this.getDocumentData();
  }
  async getDocumentData() {
    try {
      this.curiosities = await this.curiositiesService.getCuriosities();
      this.curiosities.sort((a, b) => a.id.localeCompare(b.id));
    } catch (error) {
      console.error('Error al obtener los datos del documento:', error);
    }
  }
  editCuriosity(id: string, text: string, img: string) {
  
    this.router.navigate(['/edit-curiosity'], { queryParams: { id, text, img } });
  }

  getDaysEnding(id: string): string {

    return id.substring(id.lastIndexOf("0")+1,id.length);
  }
  
}
