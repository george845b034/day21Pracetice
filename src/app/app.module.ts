import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FeedComponent} from "./feed/feed.component";
import {MenuComponent} from "./menu/menu.component";
import {UserService} from "./user.service";

@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
