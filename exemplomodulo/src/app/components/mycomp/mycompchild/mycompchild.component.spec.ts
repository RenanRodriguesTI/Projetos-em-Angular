import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompchildComponent } from './mycompchild.component';

describe('MycompchildComponent', () => {
  let component: MycompchildComponent;
  let fixture: ComponentFixture<MycompchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycompchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycompchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
