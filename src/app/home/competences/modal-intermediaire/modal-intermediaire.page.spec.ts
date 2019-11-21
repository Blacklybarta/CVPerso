import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalIntermediairePage } from './modal-intermediaire.page';

describe('ModalIntermediairePage', () => {
  let component: ModalIntermediairePage;
  let fixture: ComponentFixture<ModalIntermediairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIntermediairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalIntermediairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
