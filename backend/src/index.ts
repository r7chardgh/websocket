const express = require("express");

import { log } from "console";
import { Server } from "socket.io";
const { createServer } = require("http");

const server = createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["POST", "GET"],
  },
});
io.on("connection", (socket) => {
  console.log("socket connected");
  io.emit("message","hello user",socket.id);
});
server.listen(4000, () => {
  console.log("Server started on port ", 4000);
});
