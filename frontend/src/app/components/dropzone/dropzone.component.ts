import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  file: File = null;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    // setTimeout(() => console.log(this.drop))
  }
 
  onSelect(event) {
    this.file =  event.addedFiles[0];
    // console.log(this.file)
    this.photoService.setFile(this.file)
  }
  
  onRemove(event) {
    console.log(event);
    this.file = null;
  }

}
