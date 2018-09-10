import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListComponent } from './pet-list.component';
import { TransformBooleanPipe } from '../../pipes/transform-boolean.pipe';

describe('PetListComponent', () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListComponent, TransformBooleanPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
