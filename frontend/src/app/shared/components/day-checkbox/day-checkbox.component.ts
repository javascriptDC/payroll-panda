import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {daysOfWeek} from '../../models/shared.model';

@Component({
  selector: 'app-day-checkbox',
  templateUrl: './day-checkbox.component.html',
  styleUrls: ['./day-checkbox.component.scss']
})
export class DayCheckboxComponent implements OnInit {

  @Input() dayOfWeek: daysOfWeek;
  @Input() checked: boolean;
  @Output() check = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
