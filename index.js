import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

let users = [];

let tweets = [];

server.post("/sign-up", (request, response) => {
    users.push(request.body)
    response.send(users)
    console.log(users)
})

server.post("/tweets", (request, response) => {
    const username = request.body.username;
    const tweet = request.body.tweet;
    let avatar = "";
    let isThere = users.find((u) => u.username === username);
    if (isThere) {
        avatar = isThere.avatar;
    }
    tweets.push({ username, avatar, tweet });
    console.log(username, tweet);
    response.send("OK");
})

server.get("/tweets", (request, response) => {
    response.send(tweets);
})

server.listen(5000);