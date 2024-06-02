import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CuriositiesService } from "src/app/services/Curiosities.service";

@Component({
  selector: "app-EditarCuriosity",
  templateUrl: "./EditCuriosity.component.html",
  styleUrls: ["./EditCuriosity.component.css"]
})

export class EditarCuriosityComponent implements OnInit {
  id: string='';
  text: string='';
  img: string='';
  nuevaImagen: string='';
  constructor(private route: ActivatedRoute,private curiositiesService: CuriositiesService ) { }

 ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.id = params['id'];
    this.text = params['text'];
    this.img = params['img'];
  });
}
  
  onFileSelected(event:any): void {
    this.nuevaImagen = event.target.files[0];
  }

  guardarCambios(): void {
    const datos="";// Recoger imagen y descripcion, mirar que sea correcto.
    this.curiositiesService.editCuriosity(this.id,datos);
  }
}
