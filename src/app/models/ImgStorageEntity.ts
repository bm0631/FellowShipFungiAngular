export abstract class ImgStorageEntity {
    private readonly URLBase: string = "https://firebasestorage.googleapis.com/v0/b/fellowship-fungi.appspot.com/o/";
    protected img: string = '';
  
    public getImgUrl(): string {
      return `${this.URLBase}${this.getFolderAndImg().replace(" ", "%20").replace(".jpg", "")}.jpg?alt=media`;
    }
  
    protected getImg(): string {
      return this.img;
    }
  
    public setImg(img: string): void {
      this.img = img;
    }
  
    public getFolderAndImg(): string {
      return this.getFolder() + this.img;
    }
  
    public abstract getFolder(): string;
  }
  