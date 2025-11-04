import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlareShadow } from './flare-shadow';

describe('FlareShadow', () => {
  let component: FlareShadow;
  let fixture: ComponentFixture<FlareShadow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlareShadow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlareShadow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
