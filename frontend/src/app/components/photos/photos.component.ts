import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/photo.interface';
import { PhotoService } from 'src/app/services/photo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public photos: IPhoto[] = [];
  public baseUrl: string = "http://localhost:3000";

  constructor(private photoService: PhotoService, public dialog: MatDialog) {
    this.photoService.getPhotos();
    this.photoService.photos$.subscribe(p => { console.log('got here'); this.photos = p});
   }

  ngOnInit(): void {
  }

  deletePhoto(id){
    this.photoService.deletePhoto(id).subscribe(e => {
      this.photoService.getPhotos();
      console.log('deleted')})
  }

}
