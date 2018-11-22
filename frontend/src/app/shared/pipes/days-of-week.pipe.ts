import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysOfWeek'
})
export class DaysOfWeekPipe implements PipeTransform {

  private weekends = ['Sat', 'Sun'];
  private weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  transform(value: string): any {
    const daysOfWeek = value.split(', ');
    const hasWeekdays = this.containInArray(daysOfWeek, this.weekdays);
    const hasWeekend = this.containInArray(daysOfWeek, this.weekends);

    if (hasWeekdays && hasWeekend) {
      return 'Every day';
    } else if (hasWeekend) {
      return 'Weekends';
    } else if (hasWeekdays) {
      return 'Week days';
    } else {
      return value;
    }
  }

  private containInArray(targetArray: string[], elementArray: string[]) {
    return elementArray.every(element => targetArray.includes(element));
  }

}
