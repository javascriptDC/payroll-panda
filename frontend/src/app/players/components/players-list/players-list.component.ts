import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../../../shared/models/player';
import { PlayerService } from '../../services/player.service';
import {ApiResponse} from '../../../shared/models/http-response';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit, OnDestroy {

  players: Player[];

  private updatedPlayersSubscription: Subscription;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.updatedPlayersSubscription = this.playerService.getUpdatedPayersSubject()
      .subscribe(isUpdated => {
        if (isUpdated) {
          this.getPlayers();
        }
      })
    ;

    this.getPlayers();
  }

  ngOnDestroy() {
    this.updatedPlayersSubscription.unsubscribe();
  }

  async getPlayers() {
    try {
      const getPlayersResponse: ApiResponse = await this.playerService.getPlayers();
      this.players = getPlayersResponse.data as Player[];
      console.log('PlayersListComponent->ngOnInit->players', this.players);
    } catch (e) {
      console.log('PlayersListComponent->getPlayers->error', e);
    }
  }

  async deletePlayer(player: Player) {
    try {
      await this.playerService.deletePlayer(player.id);
      this.players.splice(this.players.indexOf(player), 1);
    } catch (e) {
      console.log('PlayersListComponent->deletePlayers->error', e);
    }
  }

}
