/**
 * Created by george.cc.chang on 2016/10/11.
 */

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FeedComponent} from "./feed/feed.component";
import {FriendsComponent} from "./friends/friends.component";
import {MessageComponent} from "./message/message.component";
import {FriendComponent} from "./friend/friend.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/feed', pathMatch: 'full'},
    {path: 'feed', component: FeedComponent},
    {path: 'friends', component: FriendsComponent},
    {path: 'message', component: MessageComponent},
    {path: 'friend/:friendId', component: FriendComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
