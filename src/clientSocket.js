"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const Avatar_1 = require("./Avatar");
const PlayerList_1 = __importDefault(require("./PlayerList"));
const SERVER_URL = "https://10.38.23.80:8000";
const INTERVAL = 50;
var playerList = new PlayerList_1.default();
const socket = (0, socket_io_client_1.io)(SERVER_URL);
socket.on("connect", () => {
    console.log("you connected with id: ", socket.id);
    const username = prompt("Enter your username") || socket.id;
    socket.emit("register", username);
    window.setInterval(() => {
        socket.emit("update", (0, Avatar_1.createMyUserObj)(socket.id, username), socket.id);
    }, INTERVAL);
});
socket.on("join", (socketId, username) => {
    playerList.createNewPlayer(socketId, username);
});
socket.on("update", (userObj, clientId) => {
    playerList.updatePos(userObj, clientId);
});
socket.on("leave", (clientId) => {
    playerList.removePlayer(clientId);
});
//# sourceMappingURL=clientSocket.js.map