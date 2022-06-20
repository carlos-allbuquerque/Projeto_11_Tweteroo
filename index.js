import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

let users = [];

let tweets = [];

server.post("/sign-up", (request, response) => {
    users.push(request.body);
    response.send(users);
})

server.post("/tweets", (request, response) => {
    const { username, tweet } = request.body;
    const avatar = users.find((u) => u.username === username).avatar;
    tweets.push({ username, tweet, avatar });
    response.send("OK");
})

server.listen(5000);