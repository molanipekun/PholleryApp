import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FabComponent } from './components/fab/fab.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PhotoformComponent } from './components/photoform/photoform.component';
import { FormsModule } from '@angular/forms';
import { PhotoService } from './services/photo.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './components/photos/photos.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FabComponent,
    DropzoneComponent,
    PhotoformComponent,
    PhotosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    NgxDropzoneModule,
    BrowserAnimationsModule,
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
