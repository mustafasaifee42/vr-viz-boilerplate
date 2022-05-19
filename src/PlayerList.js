"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avatar_1 = require("./Avatar");
const stringToColor_1 = __importDefault(require("./stringToColor"));
class PlayerList {
    constructor() {
        this.clientsObj = {};
    }
    createNewPlayer(id, username) {
        console.log(`user ${id} (username: ${username}) joined`);
        const color = (0, stringToColor_1.default)(username);
        const userObj = {
            id,
            username,
            color,
            left: { pos: "0 0 0", rot: "0 0 0" },
            right: { pos: "0 0 0", rot: "0 0 0" },
            head: { pos: "0 1.6 0", rot: "0 0 0" },
        };
        this.clientsObj[id] = userObj;
        (0, Avatar_1.createAvatar)(userObj, id);
    }
    getPlayerObjById(id) {
        return this.clientsObj[id];
    }
    removePlayer(clientId) {
        (0, Avatar_1.removeAvatar)(clientId);
        delete this.clientsObj[clientId];
    }
    updatePos(receivedObj, clientId) {
        this.clientsObj[clientId] = receivedObj;
        (0, Avatar_1.updateAvatar)(receivedObj, clientId);
    }
}
exports.default = PlayerList;
//# sourceMappingURL=PlayerList.js.map