import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent {
  @Input() pets: Pet[];
  @Output() pat = new EventEmitter<Pet>();
  @Output() dress = new EventEmitter<Pet>();
  @Output() walk = new EventEmitter<Pet>();
  @Output() feed = new EventEmitter<Pet>();
  @Output() wash = new EventEmitter<Pet>();
}
