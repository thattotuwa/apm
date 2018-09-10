import { reducer, initialPetState, PetState } from './pet.reducer';
import {PetActions, PatPetAction, AddPetAction, FeedPetAction, WalkPetAction, WashPetAction, DressPetAction} from './pet.actions';
import { Pet } from '../models/pet';

describe('pet.reducer', () => {
  it('should return initial state when action is not a pet action', () => {
    // arrange and act
    const result = reducer(undefined, <PetActions>{});

    // assert
    expect(result).toBe(initialPetState);
  });

  it('should add pet to state when add action is used as input', () => {
    // arrange and act
    const result = reducer(undefined, new AddPetAction(getTestPet()));

    // assert
    expect(result.pets.length).toBe(1);
  });

  it('should increment pat count, when pat action is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new PatPetAction(0));

    // assert
    expect(result.pets[0].numberOfPats).toBe(1);
  });

  it('should increment walk count, when walk action is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new WalkPetAction(0));

    // assert
    expect(result.pets[0].numberOfWalks).toBe(1);
  });

  it('should not increment pat count, when wrong pet id is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new PatPetAction(1));

    // assert
    expect(result.pets[0].numberOfPats).toBe(0);
  });

  it('should dress the pet when the pet is undressed and a dress action is fired', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new DressPetAction(0));

    // assert
    expect(result.pets[0].dressed).toBe(true);
  });

  it('should undress the pet when the pet is dressed and a dress action is fired', () => {
    // arrange and act
    const result = reducer(getTestPetState(true), new DressPetAction(0));

    // assert
    expect(result.pets[0].dressed).toBe(false);
  });


  it('should do nothing, when wrong pet id is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new DressPetAction(1));

    // assert
    expect(result.pets[0].dressed).toBe(false);
  });

  it('should increment feed count, when feed action is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new FeedPetAction(0));

    // assert
    expect(result.pets[0].numberOfFeeds).toBe(1);
  });

  it('should not increment feed count, when wrong pet id is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new FeedPetAction(1));

    // assert
    expect(result.pets[0].numberOfFeeds).toBe(0);
  });

  it('should not increment walk count, when wrong pet id is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new WalkPetAction(1));

    // assert
    expect(result.pets[0].numberOfWalks).toBe(0);
  });

  it('should increment wash Count, when wash action is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new WashPetAction(0));

    // assert
    expect(result.pets[0].washCount).toBe(1);
  });
  it('should not increment wash Count, when wash action is used as input', () => {
    // arrange and act
    const result = reducer(getTestPetState(), new WashPetAction(7));

    // assert
    expect(result.pets[0].washCount).toBe(0);
  });

  function getTestPetState(dressed = false): PetState {
    return {
      pets: [getTestPet(dressed)]
    };
  }

  function getTestPet(dressed = false): Pet {
    return {
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
      numberOfWalks: 0,
      numberOfFeeds: 0,
      dressed: dressed,
      washCount: 0
    };
  }
});
