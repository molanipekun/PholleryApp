import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoformComponent } from '../photoform/photoform.component';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void{

  }
  
  openDialog(): void {
    setTimeout(() => {
      const dialogRef = this.dialog.open(PhotoformComponent, {
        minWidth: '80vw',
        // data: {name: this.name, animal: this.animal}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    })
  }

}
