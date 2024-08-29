"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const socket_io_1 = require("socket.io");
const { createServer } = require("http");
const server = createServer();
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
        methods: ["POST", "GET"],
    },
});
io.on("connection", (socket) => {
    console.log("socket connected");
    io.emit("message", "hello user", socket.id);
});
server.listen(4000, () => {
    console.log("Server started on port ", 4000);
});
