import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotograpyComponent } from './photograpy.component';

describe('PhotograpyComponent', () => {
  let component: PhotograpyComponent;
  let fixture: ComponentFixture<PhotograpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotograpyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotograpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
