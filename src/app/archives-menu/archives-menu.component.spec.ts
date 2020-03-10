import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesMenuComponent } from './archives-menu.component';

describe('ArchivesMenuComponent', () => {
  let component: ArchivesMenuComponent;
  let fixture: ComponentFixture<ArchivesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
