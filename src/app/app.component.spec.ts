import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute.component';
import { CheckboxComponent } from './checkbox.component';
import { DropDownComponent } from './drop-down.component';
import { RadioComponent } from './radio.component';
import { TextComponent } from './text.component';
import { TextAreaComponent } from './text-area.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AttributeComponent,
        CheckboxComponent,
        DropDownComponent,
        RadioComponent,
        TextComponent,
        TextAreaComponent
      ],
    }).compileComponents();
  }));
  it(`should have some tests`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // test here
  }));
});
