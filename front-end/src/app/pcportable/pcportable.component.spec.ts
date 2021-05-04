import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCportableComponent } from './pcportable.component';

describe('PCportableComponent', () => {
  let component: PCportableComponent;
  let fixture: ComponentFixture<PCportableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCportableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCportableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
