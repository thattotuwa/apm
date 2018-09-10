import { Pet } from '../models/pet';
import { PetActions, PetActionTypes } from './pet.actions';

export interface PetState {
  pets: Pet[];
}

export const initialPetState: PetState = { pets: [] };

export function reducer(state = initialPetState, action: PetActions): PetState {
  switch (action.type) {
    case PetActionTypes.ADD:
      return { ...state, pets: [...state.pets, action.payload] };
    case PetActionTypes.PAT:
      return {...state, pets: state.pets.map(p => {
        if (p.id === action.payload) {
          return {...p, numberOfPats: p.numberOfPats + 1};
        } else {
          return p;
        }
      })};
    case PetActionTypes.DRESS:
      return {...state, pets: state.pets.map(p => {
        if (p.id === action.payload) {
          return {...p, dressed: !p.dressed};
        } else {
          return p;
        }
      })};
    case PetActionTypes.WALK:
      return {
        ...state,
        pets: state.pets.map(pet => {
          if (pet.id === action.payload) {
            return { ...pet, numberOfWalks: pet.numberOfWalks + 1 };
          }
          return pet;
        })
      };
    case PetActionTypes.FEED:
      return {...state, pets: state.pets.map(p => {
          if (p.id === action.payload) {
            return {...p, numberOfFeeds: p.numberOfFeeds + 1};
          } else {
            return p;
          }
        })};
    case PetActionTypes.WASH:
      return {...state, pets: state.pets.map(p => p.id === action.payload ? {...p, washCount: p.washCount + 1} : p)};
    default:
      return state;
  }
}
