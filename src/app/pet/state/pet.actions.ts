import { Action } from '@ngrx/store';
import { Pet } from '../models/pet';

export enum PetActionTypes {
  ADD = '[Pet]Add',
  PAT = '[Pet]Pat',
  DRESS = '[Pet]Dress',
  WALK = '[Pet]Walk',
  FEED = '[Pet]Feed',
  WASH = '[Pet]Wash '
}

export class AddPetAction implements Action {
  public readonly type = PetActionTypes.ADD;
  constructor(public payload: Pet) {}
}

export class PatPetAction implements Action {
  public readonly type = PetActionTypes.PAT;
  constructor(public payload: number) {}
}

export class WalkPetAction implements Action {
  public readonly type = PetActionTypes.WALK;
  constructor(public payload: number) {}
}

export class FeedPetAction implements Action {
  public readonly type = PetActionTypes.FEED;
  constructor(public payload: number) {
  }
}

export class DressPetAction implements Action {
  public readonly type = PetActionTypes.DRESS;
  constructor(public payload: number) {

  }
}

export class WashPetAction implements Action {
  readonly type = PetActionTypes.WASH;
  constructor(public payload: number) {}
}

export type PetActions = AddPetAction | PatPetAction | FeedPetAction | WalkPetAction | WashPetAction | DressPetAction;
