import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerRankingScreenComponent } from './player-ranking-screen/player-ranking-screen.component';
import { JoinGameScreenComponent } from './join-game-screen/join-game-screen.component';
import { AdminLoginScreenComponent } from './admin-login-screen/admin-login-screen.component';
import { PlayerListingAdminScreenComponent } from './player-listing-admin-screen/player-listing-admin-screen.component';
import { AddNewPlayerAdminScreenComponent } from './add-new-player-admin-screen/add-new-player-admin-screen.component';
import { EditPlayerAdminScreenComponent } from './edit-player-admin-screen/edit-player-admin-screen.component';

const routes: Routes = [
  {
    path: 'player-ranking-screen',
    component: PlayerRankingScreenComponent,
    data: { title: 'Player Rankings Screen' }
  },
  {
    path: 'join-game-screen',
    component: JoinGameScreenComponent,
    data: { title: 'Join Game Screen' }
  },
  {
    path: 'admin-login-screen',
    component: AdminLoginScreenComponent,
    data: { title: 'Admin Login Screen' }
  },
  {
    path: 'player-listing-admin-screen',
    component: PlayerListingAdminScreenComponent,
    data: { title: 'Player Listing Admin Screen' }
  },
  {
    path: 'add-new-player-admin-screen',
    component: AddNewPlayerAdminScreenComponent,
    data: { title: 'Add New Player Admin Screen' }
  },
  {
    path: 'edit-player-admin-screen',
    component: EditPlayerAdminScreenComponent,
    data: { title: 'Edit Player Admin Screen' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
