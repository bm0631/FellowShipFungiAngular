import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AnswerTestEntity } from "src/app/models/AnswerTestEntity";
import { TestEntity } from "src/app/models/TestEntity";
import { TestService } from "src/app/services/Test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})

export class TestComponent implements OnInit {

  testEntities: TestEntity[] = []; 
  constructor(private router: Router,private testService:TestService) { 
  }

  ngOnInit() {
    this.getDocumentData();
  }
  async getDocumentData() {
    try {
      this.testEntities = await this.testService.getQuestions();
      this.testEntities.sort((a, b) => a.id.localeCompare(b.id));
    } catch (error) {
      console.error('Error al obtener los datos del documento:', error);
    }
  }
  editQuestion(id: string, text: string, img: string,answers:AnswerTestEntity[]) {
  
    this.router.navigate(['/edit-test'], { queryParams: { id, text, img,answers} });
  }
  deleteQuestion(id: string) {
  
    alert ('TODO');
  }

}
