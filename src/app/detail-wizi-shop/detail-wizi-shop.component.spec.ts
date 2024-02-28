import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWiziShopComponent } from './detail-wizi-shop.component';

describe('DetailWiziShopComponent', () => {
  let component: DetailWiziShopComponent;
  let fixture: ComponentFixture<DetailWiziShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailWiziShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailWiziShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
