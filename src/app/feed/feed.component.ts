import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Tweet} from "../tweet";
import {FeedService} from "../feed.service";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    tweets = [];

    tweetText = '';

    errorText = '';

    loaded = false;

    constructor(private userService: UserService, private feedService: FeedService) {
    }

    ngOnInit() {
        this.feedService.getCurrentFeed().subscribe( (newTweets) => {
            console.log(newTweets);
            this.tweets = newTweets;
        }, ( error ) => {
            this.errorText = error;
        }, () => {
            this.loaded = true;
        });
        // this.tweets = this.feedService.getCurrentFeed();
    }

    onFavorite(tweet) {
        this.feedService.favoriteTweet(tweet);
    }

    onRetweet(tweet) {
        this.feedService.retweet(tweet);
    }

    onNewTweet() {
        this.feedService.postNewTweet(this.tweetText).subscribe((newTweet:Tweet)=>{
            this.tweets.unshift(newTweet);
        });
        this.tweetText = '';
    }
}
