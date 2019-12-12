import { Component, OnInit } from '@angular/core';

export interface Player {
  player: string;
  rank: number;
  score: number;
  time: string;
  games_played: string;
  status: string;
}

const ELEMENT_DATA: Player[] = [
  {player: 'testPlayer99', rank: 2, score: 120000, time: '1d 12h 32m', games_played: 'Overwatch', status: 'Available'},
  {player: 'player2', rank: 1, score: 123456, time: '0d 1h 20m', games_played: 'Fallout 4', status: 'Available'},
  {player: 'Diablo 99', rank: 5, score: 848770, time: '1d 12h 32m', games_played: 'Fallout 4', status: 'Unavailable'} 
];

@Component({
  selector: 'app-player-ranking-screen',
  templateUrl: './player-ranking-screen.component.html',
  styleUrls: ['./player-ranking-screen.component.css']
})
export class PlayerRankingScreenComponent implements OnInit {

  displayedColumns: string[] = ['player', 'rank', 'score', 'time', 'games_played', 'status', 'join_game'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
