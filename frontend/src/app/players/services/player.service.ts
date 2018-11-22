import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../../shared/models/player';
import {ApiResponse} from '../../shared/models/http-response';
import {BehaviorSubject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersUrl = `players`;
  private getPlayersPromise: Promise<ApiResponse>;

  private updatedPlayersSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
  ) { }

  getPlayers(): Promise<ApiResponse> {
    if (!this.getPlayersPromise) {
      const fullUrl = this.makeFullUrl(this.playersUrl);
      this.getPlayersPromise = this.http.get<ApiResponse>(fullUrl, httpOptions).toPromise();
    }
    return this.getPlayersPromise;
  }

  addPlayer(player: Player) {
    const fullUrl = this.makeFullUrl(this.playersUrl);
    return this.http.post(fullUrl, player, httpOptions).toPromise();
  }

  deletePlayer(playerId: number) {
    const fullUrl = this.makeFullUrl(this.playersUrl, playerId.toString());
    return this.http.delete(fullUrl, httpOptions).toPromise();
  }

  // post, put and patch: About these method, it is not necessary to implement.

  setUpdatedPlayersSubject() {
    this.getPlayersPromise = null;
    this.updatedPlayersSubject.next(true);
  }

  getUpdatedPayersSubject(): BehaviorSubject<boolean> {
    return this.updatedPlayersSubject;
  }

  private makeFullUrl(url: string, suffix = ''): string {
    const fullUrl = `${environment.apiBase}${url}`;
    return !suffix ? fullUrl : `${fullUrl}/${suffix}`;
  }
}
