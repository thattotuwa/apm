import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.scss']
})
export class PetPageComponent {
  pets: Pet[];

  constructor(private petService: PetService) {
    petService.getPets().subscribe(p => this.pets = p);
  }

  pat(pet: Pet) {
    this.petService.pat(pet.id);
  }

  dress(pet: Pet) {
    this.petService.dress(pet.id);
  }

  walk(pet: Pet) {
    this.petService.walk(pet.id);
  }

  feed(pet: Pet) {
    this.petService.feed(pet.id);
  }

  wash(pet: Pet) {
    this.petService.wash(pet.id);
  }
}
