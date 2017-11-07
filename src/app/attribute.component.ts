import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  template: `
        <h1>Properties and Attributes</h1>
        <div>
            <input #one type="text" value="set as attribute" (keyUp)="0">
            <div> Attribute: {{one.getAttribute("value")}}</div>
            <div> Property: {{one.value}}</div>
        </div>
        <hr/>
        <p>
            <button #two disabled="false">Disabled</button>
            Attribute: {{two.getAttribute("disabled")}}, property: {{two.disabled}}
        </p>
        <p>
            Button is disabled. Presence of 'disabled' attribute is checked, not the value.
        </p>`
})
export class AttributeComponent {
}
