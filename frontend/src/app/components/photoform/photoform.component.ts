import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photoform',
  templateUrl: './photoform.component.html',
  styleUrls: ['./photoform.component.scss']
})
export class PhotoformComponent implements OnInit {

  public name: string;
  private file;
  private name_;
  
  constructor(
    private photoService: PhotoService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.photoService.file$.subscribe(file => this.file = file);
      this.photoService.name$.subscribe(name => this.name_ = name);
    }

    ngOnInit(): void {
    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }

    onSubmit(){
      this.photoService.setName(this.name);

      // this.photoService.createPhoto(this.file, this.name_).subscribe(p => console.log(p));
      this.photoService.uploadPhoto(this.file).subscribe(r => {
        this.photoService.createPhoto(this.name_, r.url).subscribe(p => { this.dialogRef.close(); this.photoService.getPhotos() });

      });
    }

}
