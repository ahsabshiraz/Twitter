const express = require("express");
const connect = require("./config/database");
const app = express();

const Tweet = require("./models/tweet");

app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("Mongo db connected");
  const tweets = await Tweet.find({
    content: ["With hooks now....", "hooks", "faef"],
  });
  console.log(tweets);
});
