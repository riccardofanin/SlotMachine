"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let arrEm = ["⚔", "💰", "🐞", "⚡"];
function play() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("result").style.display = "none";
        for (let time = 200; time < 1000; time += 50) {
            yield timer(time);
            console.log(time);
            changeEmoji();
        }
        checkWin();
    });
}
function timer(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("success"), time);
    });
}
function changeEmoji() {
    document.getElementById("slot-c-1").innerText = document.getElementById("slot-t-1").innerText;
    document.getElementById("slot-c-2").innerText = document.getElementById("slot-t-2").innerText;
    document.getElementById("slot-c-3").innerText = document.getElementById("slot-t-3").innerText;
    document.getElementById("slot-b-1").innerText = document.getElementById("slot-c-1").innerText;
    document.getElementById("slot-b-2").innerText = document.getElementById("slot-c-2").innerText;
    document.getElementById("slot-b-3").innerText = document.getElementById("slot-c-3").innerText;
    document.getElementById("slot-t-1").innerText = arrEm[Math.floor(Math.random() * 4)];
    document.getElementById("slot-t-2").innerText = arrEm[Math.floor(Math.random() * 4)];
    document.getElementById("slot-t-3").innerText = arrEm[Math.floor(Math.random() * 4)];
}
function checkWin() {
    if (document.getElementById("slot-c-1").innerText == document.getElementById("slot-c-2").innerText && document.getElementById("slot-c-2").innerText == document.getElementById("slot-c-3").innerText) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = "JACKPOT!";
    }
    else if (document.getElementById("slot-c-1").innerText == document.getElementById("slot-c-2").innerText) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = "WIN!";
    }
    else if (document.getElementById("slot-c-2").innerText == document.getElementById("slot-c-3").innerText) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = "WIN!";
    }
    else if (document.getElementById("slot-c-1").innerText == document.getElementById("slot-c-3").innerText) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = "WIN!";
    }
    else {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = "GAME OVER!";
    }
}
