import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartypackComponent } from './partypack.component';

describe('PartypackComponent', () => {
  let component: PartypackComponent;
  let fixture: ComponentFixture<PartypackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartypackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartypackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
