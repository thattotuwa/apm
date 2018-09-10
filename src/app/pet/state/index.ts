import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../state/app.state';
import { PetState } from './pet.reducer';

const getPetState = createFeatureSelector<PetState>('pets');

export interface State extends fromRoot.State {
  pets: PetState;
}

export const getPets = createSelector(getPetState, state => {
  return state.pets;
});
