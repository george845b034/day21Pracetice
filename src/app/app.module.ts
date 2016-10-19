import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FeedComponent} from "./feed/feed.component";
import {MenuComponent} from "./menu/menu.component";
import {UserService} from "./user.service";
import {FeedService} from "./feed.service";
import {routing, appRoutingProviders} from "./app.routing";
import {FriendsComponent} from "./friends/friends.component";
import {MessageComponent} from "./message/message.component";
import {FriendComponent} from "./friend/friend.component";
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        MenuComponent,
        FriendsComponent,
        FriendComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, {
            delay: 3000,
            rootPath: 'api/'
        }),
        routing
    ],
    providers: [UserService, FeedService, appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
