import { Component, OnInit } from '@angular/core';

export interface Player {
  player: string;
  rank: number;
  score: number;
  time: string;
  games_played: string;
  status: string;
}

export interface Game {
  title: string;
  platform: string;
  genre: string;
  rating: string;
  publisher: string;
  release: number;
  status: string
}

// replace data here from db pulls

const ELEMENT_DATA: Player[] = [
  {player: 'testPlayer99', rank: 2, score: 120000, time: '1d 12h 32m', games_played: 'Overwatch', status: 'Available'} 
];

const ELEMENT_DATA_GAMES: Game[] = [
  {title: 'Overwatch', platform: 'All', genre: 'Action', rating: '4 stars', publisher: 'Blizzard', release: 2016, status: 'Active'} 
];

@Component({
  selector: 'app-player-listing-admin-screen',
  templateUrl: './player-listing-admin-screen.component.html',
  styleUrls: ['./player-listing-admin-screen.component.css']
})
export class PlayerListingAdminScreenComponent implements OnInit {

  displayedColumns: string[] = ['player', 'rank', 'score', 'time', 'games_played', 'status', 'update', 'delete'];
  dataSource = ELEMENT_DATA;

  displayedColumnsGames: string[] = ['title', 'platform', 'genre', 'rating', 'publisher', 'release', 'status'];
  dataSourceGames = ELEMENT_DATA_GAMES;

  constructor() { }

  ngOnInit() {
  }

}
