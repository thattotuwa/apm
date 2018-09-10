import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PetModule } from './pet/pet.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports : [
        HttpClientTestingModule,
        PetModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({})
      ]
    }).compileComponents();
  }));
  it('should create the ReduxSandboxMelbourne', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ReduxSandboxMelbourne'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ReduxSandboxMelbourne');
  }));
});
