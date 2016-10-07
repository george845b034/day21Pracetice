import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    tweets = [
        {
            body: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
            author: 'Glen',
            avatar: 'glen.jpg',
            date: new Date(),
            retweets: ['Joe'],
            favorites: []
        },
        {
            body: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight',
            author: 'Joe',
            avatar: 'joe.jpg',
            date: new Date(),
            retweets: [],
            favorites: ['Mary']
        },
        {
            body: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
            author: 'Mary',
            avatar: 'mary.jpg',
            date: new Date(),
            retweets: ['Glen'],
            favorites: ['Mary']
        },
        {
            body: 'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones',
            author: 'Glen',
            avatar: 'glen.jpg',
            date: new Date(),
            retweets: ['Joe', 'Mary'],
            favorites: []
        },
        {
            body: 'You can’t have great software without a great team, and most software teams behave like dysfunctional families.',
            author: 'Joe',
            avatar: 'joe.jpg',
            date: new Date(),
            retweets: [],
            favorites: ['Mary', 'Glen']
        }
    ];

    tweetText = '';

    constructor(private userService:UserService) {
    }

    ngOnInit() {
    }

    isUserInCollection(collection: string[], userId: string) : boolean {
        return collection.indexOf(userId) != -1;
    }

    onFavorite(tweet){
        if (!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())) {
            tweet.favorites.push(this.userService.getCurrentUser());
        }
    }

    onRetweet(tweet){
        if (!this.isUserInCollection(tweet.retweets, this.userService.getCurrentUser())) {
            tweet.retweets.push(this.userService.getCurrentUser());
        }
    }

    onNewTweet() {
        this.tweets.unshift({
            body: this.tweetText,
            author: 'george',
            avatar: 'glen.jpg',
            date: new Date(),
            retweets: [],
            favorites: []
        });
        this.tweetText = '';
    }
}