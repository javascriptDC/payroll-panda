import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerRegisterComponent } from './components/player-register/player-register.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayersComponent } from './components/players/players.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [PlayerRegisterComponent, PlayersListComponent, PlayersComponent]
})
export class PlayersModule { }
