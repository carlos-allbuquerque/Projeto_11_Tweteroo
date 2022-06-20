import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

let users = [];

let tweets = [];

server.post("/sign-up", (request, response) => {
    users.push(request.body)
    response.status(201).send("OK");
})

server.post("/tweets", (request, response) => {
    const tweet = request.body.tweet;
    const user  = request.header("user");
    const avatar = users.find((u) => u.username === user).avatar;
    tweets.push({ username: user, avatar, tweet });
    response.status(201).send("OK");
})

server.get("/tweets", (request, response) => {
    console.log(tweets);
    if (tweets.length <= 10) {
        response.status(201).send(tweets.reverse());
    } 
    if (tweets.length > 10) {
        response.status(201).send([...tweets].reverse().slice(0, 10))
    }
    
})

server.listen(5000);