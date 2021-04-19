import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoformComponent } from './photoform.component';

describe('PhotoformComponent', () => {
  let component: PhotoformComponent;
  let fixture: ComponentFixture<PhotoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
