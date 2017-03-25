import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsCardComponent } from './streams-card.component';

describe('StreamsCardComponent', () => {
  let component: StreamsCardComponent;
  let fixture: ComponentFixture<StreamsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
