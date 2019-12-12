import { Component, OnInit } from '@angular/core';

export interface Player {
  player: string;
  rank: number;
  score: number;
  time: string;
}

const ELEMENT_DATA: Player[] = [
  {player: 'testPlayer99', rank: 2, score: 120000, time: '1d 12h 32m'} 
];

@Component({
  selector: 'app-edit-player-admin-screen',
  templateUrl: './edit-player-admin-screen.component.html',
  styleUrls: ['./edit-player-admin-screen.component.css']
})
export class EditPlayerAdminScreenComponent implements OnInit {

  displayedColumns: string[] = ['player', 'rank', 'score', 'time'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}