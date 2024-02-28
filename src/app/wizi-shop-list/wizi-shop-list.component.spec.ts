import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiziShopListComponent } from './wizi-shop-list.component';

describe('WiziShopListComponent', () => {
  let component: WiziShopListComponent;
  let fixture: ComponentFixture<WiziShopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WiziShopListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiziShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
