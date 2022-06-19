import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

const users = [];

server.post("/sign-up", (request, response) => {
    users.push(request.body);
    response.send(users);
})

server.listen(5000, () => console.log("Ok"));