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
})

server.post("/tweets", (request, response) => {
    console.log( request.header);
    const tweet = request.body.tweet;
    const user  = request.header("user");
    
    let avatar = "";
    let isThere = users.find((u) => u.username === user);
    if (isThere) {
        avatar = isThere.avatar;
    }
    tweets.push({ username: user, avatar, tweet });
    response.status(201).send("OK");
    response.send(avatar);
    console.log(user, tweet, avatar);

})

server.get("/tweets", (request, response) => {
    console.log(tweets);
    response.send(tweets.reverse());
})

server.listen(5000);