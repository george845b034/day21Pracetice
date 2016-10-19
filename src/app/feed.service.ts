import {Injectable} from '@angular/core';
import {Tweet} from "./tweet";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
// import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeedService {


    tweets = [];

    constructor(private userService: UserService, private http: Http) {
    }

    private getTweetFromJson(obj: Tweet): Tweet {
        return new Tweet(
            obj.id, obj.body, obj.author, obj.date, obj.retweets, obj.favorites)
    }

    getCurrentFeed(): Observable<Tweet[]> {


        return this.http.get('/api/tweets').map((resp: Response)=> {
            console.log(resp.json());
            var fetchedTweets = [];
            for (let tweet of resp.json().data) {
                fetchedTweets.push(this.getTweetFromJson(tweet));
            }
            return fetchedTweets as Array<Tweet>;
            // throw "Internal Error";
        }).catch(this.errorHandler);
    }

    errorHandler(err) {
        console.log(err);
        return Observable.throw(err);
    }

    isUserInCollection(collection: string[], userId: string): boolean {
        return collection.indexOf(userId) != -1;

    }

    postNewTweet(tweetText: string) {

        let body = JSON.stringify({
            body: tweetText, author: this.userService.getCurrentUser(),
            date: new Date(), retweets: [], favorites: []
        });

        return this.http.post('/api/tweets', body).map(
            (resp: Response) => {
                console.log(resp.json());
                return this.getTweetFromJson(resp.json().data);
            }).catch(this.errorHandler);

        // this.tweets.unshift(new Tweet(
        //     1,
        //     tweetText,
        //     this.userService.getCurrentUser(),
        //     new Date,
        //     [],
        //     []
        // ));
    }

    updateTweet(tweet: Tweet) {
        let body = JSON.stringify(tweet);

        let url = `/api/tweets/${tweet.id}`;

        return this.http.put(url, body).map(
            (resp: Response) => {
                console.log(resp);
                if (resp.status == 204) {
                    console.log("Success. Yay!");
                }
            });

    }

    retweet(tweet: Tweet) {
        if (!this.isUserInCollection(tweet.retweets, this.userService.getCurrentUser())) {
            tweet.retweets.push(this.userService.getCurrentUser());
            this.updateTweet(tweet).subscribe(resp => console.log(resp));
        }
    }

    favoriteTweet(tweet: Tweet) {
        if (!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())) {
            tweet.favorites.push(this.userService.getCurrentUser());
            this.updateTweet(tweet).subscribe(resp => console.log(resp));
        }

    }

    getFriends(): Promise<string[]> {

        return this.http.get('/assets/friends.json').toPromise()
            .then(response => response.json() as string[])
            .catch(this.handleError)

        // return [ 'Mary', 'Joe', 'Karen', 'Phil', 'Toni' ];

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
