import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pet } from './models/pet';
import * as fromPet from './state';
import { getPets } from './state';
import { AddPetAction, FeedPetAction, PatPetAction, WalkPetAction, WashPetAction, DressPetAction } from './state/pet.actions';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  index = 0;

  pets$: Observable<Pet[]>;

  constructor(
    private httpClient: HttpClient,
    public store: Store<fromPet.State>
  ) {
    this.pets$ = store.pipe(select(getPets));
  }

  getPets(): Observable<Pet[]> {
    this.addPetsToStore();
    return this.pets$;
  }

  addPetsToStore() {
    this.loadPets().subscribe(pets => {
      pets.forEach(pet => this.store.dispatch(new AddPetAction(pet)));
    });
  }

  loadPets(): Observable<Pet[]> {
    return this.httpClient.get<any>('https://swapi.co/api/people').pipe(
      map(result => {
        return result.results.map(x => {
          return {
            ...x,
            numberOfPats: 0,
            numberOfWalks: 0,
            numberOfFeeds: 0,
            washCount: 0,
            dressed: false,
            id: this.getIndex()
          };
        });
      })
    );
  }

  pat(id: number) {
    this.store.dispatch(new PatPetAction(id));
  }

  dress(id: number) {
    this.store.dispatch(new DressPetAction(id));
  }

  walk(id: number) {
    this.store.dispatch(new WalkPetAction(id));
  }

  feed(id: number) {
    this.store.dispatch(new FeedPetAction(id));
  }
  wash(id: number) {
    this.store.dispatch(new WashPetAction(id));
  }

  getIndex() {
    return this.index++;
  }
}
