import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-label',
  templateUrl: './checkbox-label.component.html',
  styleUrls: ['./checkbox-label.component.scss'],
})
export class CheckboxLabelComponent {
  @Input() text = '';
  @Output() clickEvent = new EventEmitter<boolean>();
  click(event: MouseEvent) {
    const newStatus = (event.currentTarget as HTMLInputElement).checked;
    this.clickEvent.emit(newStatus);
  }
}
