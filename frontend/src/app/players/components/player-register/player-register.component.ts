import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '../../../shared/models/player';
import { ValidationService } from 'src/app/shared/services/validation.service';
import {daysOfWeekLabels, daysOfWeekValues, inputVariables} from './player-register.component.fixtures';
import {daysOfWeek} from '../../../shared/models/shared.model';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-player-register',
  templateUrl: './player-register.component.html',
  styleUrls: ['./player-register.component.scss']
})
export class PlayerRegisterComponent implements OnInit {

  formData: Player = new Player();

  daysOfWeekValues: daysOfWeek[] = [];
  daysOfWeekLabels = daysOfWeekLabels;

  formSubmitted = false;

  @ViewChild('registerForm') registerForm;
  inputVariables = inputVariables;

  constructor(
    private validationService: ValidationService,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
  }

  async submit() {
    this.formSubmitted = true;

    if (!this.registerForm.form.valid || !this.validDaysOfWeekFields()) {
      return;
    }
    this.formData.days = this.daysOfWeekValues
      .map(dayOfWeek => dayOfWeek.toString())
      .join(', ')
    ;
    try {
      await this.playerService.addPlayer(this.formData);
      this.playerService.setUpdatedPlayersSubject();
      console.log('PlayerRegisterComponent->submit->player', this.formData);
      this.cancel();
    } catch (e) {
      console.log('PlayerRegisterComponent->submit->error', e);
    }
  }

  cancel() {
    this.formSubmitted = false;
    this.formData.username = '';
    this.formData.email = '';
    this.formData.ride = null;
    this.formData.city = '';
    this.daysOfWeekValues = [];
  }

  onCheckDayOfWeek(dayOfWeek: daysOfWeek) {
    if (this.daysOfWeekValues.includes(dayOfWeek)) {
      this.daysOfWeekValues.splice(this.daysOfWeekValues.indexOf(dayOfWeek), 1);
    } else {
      this.daysOfWeekValues.push(dayOfWeek);
    }
  }

  isCheckDayOfWeek(dayOfWeek: daysOfWeek) {
    return this.daysOfWeekValues.includes(dayOfWeek);
  }

  getErrorMessage(filedName: string) {
    return this.inputVariables[filedName].errorMessage;
  }

  validDaysOfWeekFields() {
    if (this.formSubmitted) {
      return this.daysOfWeekValues.length > 0;
    }
    return true;
  }
}
