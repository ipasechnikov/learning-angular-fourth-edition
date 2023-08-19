import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';
import { StubService } from '../stub.service';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;

  let service: StubService;
  let msgDisplay: HTMLElement;
  const serviceStub: Partial<StubService> = {
    name: 'Boothstomper'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StubComponent ]
    }).overrideComponent(StubComponent, {
      set: {
        providers: [
          { provide: StubService, useValue: serviceStub }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;

    msgDisplay = fixture.nativeElement.querySelector('span');
    service = fixture.debugElement.injector.get(StubService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('status', () => {
    it('should be on a mission', () => {
      service.isBusy = true;
      fixture.detectChanges();
      expect(msgDisplay.textContent).toContain('is on a mission');
    });

    it('should be available', () => {
      service.isBusy = false;
      fixture.detectChanges();
      expect(msgDisplay.textContent).toContain('is available');
    });
  });
});
