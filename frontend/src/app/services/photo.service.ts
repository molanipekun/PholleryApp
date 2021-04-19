import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUrl } from '../interfaces/url.interface';
import { IPhoto } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private file = new BehaviorSubject<File>(null);
  private name = new BehaviorSubject<string>(""); 
  private photos = new Subject<IPhoto[]>();
  private baseUrl: string = "http://localhost:3000/photos";

  readonly file$ = this.file.asObservable();
  readonly name$ = this.name.asObservable();
  readonly photos$ = this.photos.asObservable();

  constructor(private httpClient: HttpClient) { }

  setFile(f: File): void {
    this.file.next(f);
  }

  setName(name: string){
    this.name.next(name);
  }

  getPhotos(){
    this.httpClient.get<IPhoto[]>(`${this.baseUrl}/`).subscribe( a => { console.log(a); this.photos.next(a) });
  }
  

  addPhoto(){

  }

  uploadPhoto(file): Observable<IUrl>{
    let formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<IUrl>(`${this.baseUrl}/upload`, formData);
  }

  deletePhoto(id): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createPhoto(name, url){
    if (url && name){
      return this.httpClient.post(this.baseUrl, { name, url });
    }
    
    

  }

}
