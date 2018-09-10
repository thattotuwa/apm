import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { PetService } from './pet.service';
import { StarWarsTestData } from './pet.service.spec.test';
import * as fromPet from './state';
import { FeedPetAction, PatPetAction, WalkPetAction, WashPetAction } from './state/pet.actions';


describe('PetService', () => {
  let petService: PetService;
  let httpTestingController: HttpTestingController;
  let store: Store<fromPet.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PetService,
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy('dispatch').and.stub(),
            pipe: jasmine.createSpy('pipe').and.returnValue(
              of([
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
                  numberOfWalks: 0
                }
              ])
            )
          }
        }
      ],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    store = TestBed.get(Store);
  });

  beforeEach(() => {
    petService = TestBed.get(PetService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([PetService], (service: PetService) => {
    expect(service).toBeTruthy();
  }));

  it('should load pets from API and add to store, when getPets is called', () => {
    // arrange
    length = 0;
    petService.getPets().subscribe(result => {
      expect(result[0].id).toBe(0);
      expect(result[0].name).toBe('charlie');
    });

    // act and assert
    const request = httpTestingController.expectOne(
      'https://swapi.co/api/people'
    );
    expect(request.request.method).toBe('GET');
    request.flush(StarWarsTestData);
  });

  it('should dispatch pat action on store when store method is called', () => {
    // arrange and act
    petService.pat(123);

    // assert
    expect(store.dispatch).toHaveBeenCalledWith(new PatPetAction(123));
  });

  it('should dispatch walk action on store when walk method is called', () => {
    // arrange and act
    petService.walk(0);

    // assert
    expect(store.dispatch).toHaveBeenCalledWith(new WalkPetAction(0));
  });

  it('should dispatch pat action on store when store method is called', () => {
    // arrange and act
    petService.feed(123);

    // assert
    expect(store.dispatch).toHaveBeenCalledWith(new FeedPetAction(123));
  });

  it('should dispatch pat action on store when store method is called', () => {
    // arrange and act
    petService.wash(234);

    // assert
    expect(store.dispatch).toHaveBeenCalledWith(new WashPetAction(234));
  });
});
