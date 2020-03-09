import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowersComponentComponent } from './github-followers-component.component';

describe('GithubFollowersComponentComponent', () => {
  let component: GithubFollowersComponentComponent;
  let fixture: ComponentFixture<GithubFollowersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
