import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Config, ConfigService } from '../config.service';
import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [PeopleComponent],
    }).compileComponents();

    configService = TestBed.inject(ConfigService);
    const configDummy: Config = {
      backendUrl: '/TEST_DUMMY_BACKEND_URL',
    };

    spyOn(configService, 'getConfig').and.returnValue(configDummy);

    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(configService.getConfig());
    expect(component).toBeTruthy();
  });
});
