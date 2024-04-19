const { Tweetrepository } = require("../repository/index");
class TweetService {
  constructor() {
    this.tweetRepository = new Tweetrepository();
  }
  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-z0-9_]+/g); // this regex extract hashtags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    //todo create hashtags and add here
    /**
     * 1. bulkcreate in mongoose
     * 2. filter title of hashtag based on multiple tags 
     * 3. How to add tweet id inside all the hashtags
     */
    return tweet;
  }
}
module.exports = TweetService;
