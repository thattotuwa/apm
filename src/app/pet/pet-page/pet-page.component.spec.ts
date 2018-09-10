import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPageComponent } from './pet-page.component';
import { PetListComponent } from '../pet-list/pet-list.component';
import { PetService } from '../pet.service';
import { of } from 'rxjs';
import { TransformBooleanPipe } from '../../pipes/transform-boolean.pipe';
import { Pet } from '../models/pet';

describe('PetPageComponent', () => {
  let component: PetPageComponent;
  let fixture: ComponentFixture<PetPageComponent>;
  let petService: PetService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetPageComponent, PetListComponent, TransformBooleanPipe ],
      providers: [
        {
          provide: PetService,
          useValue: {
            pat: jasmine.createSpy('pat').and.stub(),
            walk: jasmine.createSpy('walk').and.stub(),
            feed: jasmine.createSpy('feed').and.stub(),
            dress: jasmine.createSpy('dress').and.stub(),
            wash: jasmine.createSpy('wash').and.stub(),
            getPets: jasmine.createSpy('getPets').and.callFake(() => {
              return of([
                {
                  id: 0,
                  name: 'charlie',
                  height: '45',
                  mass: '5',
                  hair_color: 'blonde',
                  skin_color: 'pink',
                  eye_color: 'brown',
                  birth_year: '2012',
                  gender: 'female',
                  numberOfPats: 0,
                  dressed: false
                }
              ]);
            })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPageComponent);
    component = fixture.componentInstance;
    petService = TestBed.get(PetService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call pat method in pet service when pat is called', () => {
    component.pat(getDummyPet());
    expect(petService.pat).toHaveBeenCalledWith(123);
  });

  it('should call walk method in pet service when walk is clicked', () => {
    component.walk(getDummyPet());
    expect(petService.walk).toHaveBeenCalledWith(123);
  });


  it('should call feed method in pet service when feed is called', () => {
    component.feed(getDummyPet());
    expect(petService.feed).toHaveBeenCalledWith(123);
  });

  it('should call dress method in pet service when dress is called', () => {
    component.dress(getDummyPet());
    expect(petService.dress).toHaveBeenCalledWith(123);
  });

  it('should call wash method in pet service when wash is called', () => {
    component.wash(getDummyPet());
    expect(petService.wash).toHaveBeenCalledWith(123);
  });
});


function getDummyPet(): Pet {
  return {
    id: 123,
    name: 'charlie',
    height: '45',
    mass: '5',
    hair_color: 'blonde',
    skin_color: 'pink',
    eye_color: 'brown',
    birth_year: '2012',
    gender: 'female',
    numberOfPats: 0,
    numberOfWalks: 0,
    numberOfFeeds: 0,
    washCount: 0,
    dressed: false
  };
}
