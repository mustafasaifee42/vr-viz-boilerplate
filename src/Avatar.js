"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMyUserObj = exports.removeAvatar = exports.updateAvatar = exports.createAvatar = void 0;
const stringToColor_1 = __importDefault(require("./stringToColor"));
function createAvatar(userObj, _clientId) {
    const CONE_HEIGHT = 0.3;
    const CONE_RADIUS_BOTTOM = 0.1;
    const CONE_RADIUS_TOP = 0.01;
    const CONE_LEFT_COLOR = userObj.color;
    const CONE_RIGHT_COLOR = userObj.color;
    const head = document.createElement("a-sphere");
    const leftEye = document.createElement("a-sphere");
    const rightEye = document.createElement("a-sphere");
    const leftPupil = document.createElement("a-sphere");
    const rightPupil = document.createElement("a-sphere");
    const nametag = document.createElement("a-entity");
    const leftHand = document.createElement("a-cone");
    const rightHand = document.createElement("a-cone");
    const scene = document.querySelector("a-scene");
    scene.appendChild(head);
    scene.appendChild(leftHand);
    scene.appendChild(rightHand);
    head.appendChild(leftEye);
    head.appendChild(rightEye);
    leftEye.appendChild(leftPupil);
    rightEye.appendChild(rightPupil);
    head.appendChild(nametag);
    function setControllerProps(controller) {
        controller.setAttribute("geometry", `primitive: cone; height: ${CONE_HEIGHT}; radiusBottom: ${CONE_RADIUS_BOTTOM}; radiusTop: ${CONE_RADIUS_TOP}`);
    }
    setControllerProps(leftHand);
    setControllerProps(rightHand);
    leftHand.setAttribute("id", getLeftControllerId(userObj.id));
    leftHand.setAttribute("color", CONE_LEFT_COLOR);
    rightHand.setAttribute("id", getRightControllerId(userObj.id));
    rightHand.setAttribute("color", CONE_RIGHT_COLOR);
    leftHand.setAttribute("position", userObj.left.pos);
    leftHand.setAttribute("rotation", userObj.left.rot);
    rightHand.setAttribute("position", userObj.right.pos);
    rightHand.setAttribute("rotation", userObj.right.rot);
    head.setAttribute("id", `a${userObj.id}-head`);
    head.setAttribute("position", userObj.head.pos);
    head.setAttribute("rotation", userObj.head.rot);
    head.setAttribute("scale", "0.45 0.5 0.37");
    head.setAttribute("color", userObj.color);
    leftEye.setAttribute("id", `a${userObj.id}-left-eye`);
    leftEye.setAttribute("position", "0.26 0.15 -1.0");
    leftEye.setAttribute("scale", "0.16 0.16 0.16");
    leftEye.setAttribute("color", "#efefef");
    rightEye.setAttribute("id", `a${userObj.id}-right-eye`);
    rightEye.setAttribute("position", "-0.26 0.15 -1.0");
    rightEye.setAttribute("scale", "0.16 0.16 0.16");
    rightEye.setAttribute("color", "#efefef");
    leftPupil.setAttribute("id", `a${userObj.id}-left-pupil`);
    leftPupil.setAttribute("position", "0 0 -1");
    leftPupil.setAttribute("scale", "0.2 0.2 0.2");
    leftPupil.setAttribute("color", "black");
    rightPupil.setAttribute("id", `a${userObj.id}-right-pupil`);
    rightPupil.setAttribute("position", "0 0 -1");
    rightPupil.setAttribute("scale", "0.2 0.2 0.2");
    rightPupil.setAttribute("color", "black");
    nametag.setAttribute("id", `a${userObj.id}-nametag`);
    nametag.setAttribute("position", "0 1.3 0");
    nametag.setAttribute("rotation", "0 180 0");
    nametag.setAttribute("text", `value: ${userObj.username}; align: center; color: white; width: 4; wrapCount: 20;`);
}
exports.createAvatar = createAvatar;
function updateAvatar(userObj, clientId) {
    try {
        const left = getLeftControllerId(userObj.id);
        const right = getRightControllerId(userObj.id);
        const leftCon = document.getElementById(left);
        const rightCon = document.getElementById(right);
        leftCon.setAttribute("position", userObj.left.pos);
        leftCon.setAttribute("rotation", userObj.left.rot);
        rightCon.setAttribute("position", userObj.right.pos);
        rightCon.setAttribute("rotation", userObj.right.rot);
        const head = document.getElementById(`a${userObj.id}-head`);
        head.setAttribute("position", userObj.head.pos);
        head.setAttribute("rotation", userObj.head.rot);
    }
    catch (error) {
        createAvatar(userObj, clientId);
    }
}
exports.updateAvatar = updateAvatar;
function getControllerId(userId, suffix) {
    const sliced = userId.slice(0, 5);
    return `a${sliced}-${suffix}`;
}
function getLeftControllerId(userId) {
    return getControllerId(userId, "left");
}
function getRightControllerId(userId) {
    return getControllerId(userId, "right");
}
function removeAvatar(userId) {
    document.getElementById(getLeftControllerId(userId)).remove();
    document.getElementById(getRightControllerId(userId)).remove();
    document.getElementById(`a${userId}-head`).remove();
}
exports.removeAvatar = removeAvatar;
function createMyUserObj(id, username) {
    if (!id)
        throw new Error("no established connection to socket!");
    const rigPosition = document.getElementById("rig").getAttribute("position");
    const rigRotation = document.getElementById("rig").getAttribute("rotation");
    const leftPosString = getPositionString(getAbsolutePosition(rigPosition, document.getElementById("left-con").getAttribute("position")));
    const leftRotString = getPositionString(getAbsolutePosition(rigRotation, document.getElementById("left-con").getAttribute("rotation")));
    const rightPosString = getPositionString(getAbsolutePosition(rigPosition, document.getElementById("right-con").getAttribute("position")));
    const rightRotString = getPositionString(getAbsolutePosition(rigRotation, document.getElementById("right-con").getAttribute("rotation")));
    const headPosString = getPositionString(getAbsolutePosition(rigPosition, document.getElementById("camera").getAttribute("position")));
    const headRotString = getPositionString(getAbsolutePosition(rigRotation, document.getElementById("camera").getAttribute("rotation")));
    const color = (0, stringToColor_1.default)(username);
    return {
        id,
        username,
        color,
        left: { pos: leftPosString, rot: leftRotString },
        right: { pos: rightPosString, rot: rightRotString },
        head: { pos: headPosString, rot: headRotString },
    };
}
exports.createMyUserObj = createMyUserObj;
function getPositionString(coords) {
    return `${coords.x} ${coords.y} ${coords.z}`;
}
function getAbsolutePosition(rigPos, subPos) {
    const rig = { x: rigPos.x, y: rigPos.y, z: rigPos.z };
    const sub = { x: subPos.x, y: subPos.y, z: subPos.z };
    return {
        x: rig.x + sub.x,
        y: rig.y + sub.y,
        z: rig.z + sub.z,
    };
}
//# sourceMappingURL=Avatar.js.map