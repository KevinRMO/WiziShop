import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiziShopComponent } from './wizi-shop.component';

describe('WiziShopComponent', () => {
  let component: WiziShopComponent;
  let fixture: ComponentFixture<WiziShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WiziShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiziShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
