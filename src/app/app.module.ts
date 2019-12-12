import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerRankingScreenComponent } from './player-ranking-screen/player-ranking-screen.component';
import { JoinGameScreenComponent } from './join-game-screen/join-game-screen.component';
import { AdminLoginScreenComponent } from './admin-login-screen/admin-login-screen.component';
import { PlayerListingAdminScreenComponent } from './player-listing-admin-screen/player-listing-admin-screen.component';
import { AddNewPlayerAdminScreenComponent } from './add-new-player-admin-screen/add-new-player-admin-screen.component';
import { EditPlayerAdminScreenComponent } from './edit-player-admin-screen/edit-player-admin-screen.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

const appRoutes: Routes = [
  { path: '', component: PlayerRankingScreenComponent },
  { path: 'player-ranking', component: PlayerRankingScreenComponent },
  { path: 'join-game', component: JoinGameScreenComponent },
  { path: 'admin-login', component: AdminLoginScreenComponent },
  { path: 'player-listing', component: PlayerListingAdminScreenComponent },
  { path: 'add-player', component: AddNewPlayerAdminScreenComponent },
  { path: 'edit-player', component: EditPlayerAdminScreenComponent }
//  { path: '**', component: PlayerRankingScreenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerRankingScreenComponent,
    JoinGameScreenComponent,
    AdminLoginScreenComponent,
    PlayerListingAdminScreenComponent,
    AddNewPlayerAdminScreenComponent,
    EditPlayerAdminScreenComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
