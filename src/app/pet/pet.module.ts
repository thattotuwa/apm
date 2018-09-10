import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducer } from './state/pet.reducer';
import { StoreModule } from '@ngrx/store';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetPageComponent } from './pet-page/pet-page.component';
import { TransformBooleanPipe } from '../pipes/transform-boolean.pipe';
import { MatButtonModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pets', reducer),
    MatButtonModule,
    MatTableModule,
  ],
  declarations: [
    PetPageComponent,
    PetListComponent,
    TransformBooleanPipe
  ],
  exports: [
    PetPageComponent
  ]
})
export class PetModule {
}
