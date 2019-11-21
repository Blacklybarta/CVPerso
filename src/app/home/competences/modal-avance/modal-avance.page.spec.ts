import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAVancePage } from './modal-avance.page';

describe('ModalAVancePage', () => {
  let component: ModalAVancePage;
  let fixture: ComponentFixture<ModalAVancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAVancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAVancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
