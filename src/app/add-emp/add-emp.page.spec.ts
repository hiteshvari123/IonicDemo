import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEmpPage } from './add-emp.page';

describe('AddEmpPage', () => {
  let component: AddEmpPage;
  let fixture: ComponentFixture<AddEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
