import { ImgStorageEntity } from "./ImgStorageEntity";

export class CuriosityEntity extends ImgStorageEntity {
    private static folder: string = "Curiosities%2F";
    public id: string;
    private text: string;
  
    constructor(dataMap: Map<string, string>) {
      super();
      this.id =dataMap.get("id")|| '';;
      this.text = dataMap.get("text")|| '';
      this.img = dataMap.get("img")|| '';
    }
  
    getText(): string {
      return this.text;
    }
  
    getFolder(): string {
      return CuriosityEntity.folder;
    }
  }
  