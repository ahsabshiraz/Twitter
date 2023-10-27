const express = require('express');
const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

const app = express();

app.listen(3000, async () => {
          console.log('Server started');
          await connect();
          console.log('Mongo db connected');
          // const tweet = await Tweet.create({
          //           content: 'Third tweet',

          // });

          // const tweets = await Tweet.find({ userEmail: 'a@b.com' });

          const tweetRepo = new TweetRepository();
          const tweet = await tweetRepo.getWithComments('653c05a377bc20e8e0fbd3df');
          console.log(tweet);
});   