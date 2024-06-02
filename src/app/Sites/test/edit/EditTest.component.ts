import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { TestService } from "src/app/services/Test.service";
import { AnswerTestEntity } from "src/app/models/AnswerTestEntity";

@Component({
  selector: "app-EditTest",
  templateUrl: "./EditTest.component.html",
  styleUrls: ["./EditTest.component.css"]
})
export class EditTestComponent implements OnInit {
  id: string='';
  text: string='';
  img: string='';
  nuevaImagen: string='';
  answers: AnswerTestEntity[] = []; 

  constructor(private route: ActivatedRoute, private testService: TestService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.text = params['text'];
      this.img = params['img'];
      this.answers = params['answers'];
    });
  }
  
  onFileSelected(event: any): void {
    this.nuevaImagen = event.target.files[0];
  }

  guardarCambios(): void {
    const datos = { text: this.text, answers: this.answers };
    this.testService.editTest(this.id, datos);
  }

  addNewAnswer(): void {
    alert("TODO");
  }
}
