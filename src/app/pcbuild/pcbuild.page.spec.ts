import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PcbuildPage } from './pcbuild.page';

describe('PcbuildPage', () => {
  let component: PcbuildPage;
  let fixture: ComponentFixture<PcbuildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcbuildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PcbuildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
