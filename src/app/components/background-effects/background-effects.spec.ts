import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundEffects } from './background-effects';

describe('BackgroundEffects', () => {
  let component: BackgroundEffects;
  let fixture: ComponentFixture<BackgroundEffects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundEffects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundEffects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
