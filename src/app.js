/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { right } from "@popperjs/core";

window.onload = function() {
  setInterval(randomCard, 1000);
};
function randomCard() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  let suits = ["♦", "♥", "♠", "♣"];
  let randNum = Math.floor(Math.random() * numbers.length);
  document.querySelector(".cardnumber").innerText = numbers[randNum];
  let randSuits = Math.floor(Math.random() * suits.length);
  document.querySelector(".topsuit").innerText = suits[randSuits];
  document.querySelector(".bottomsuit").innerText = suits[randSuits];
  if (suits[randSuits] == "♥" || suits[randSuits] == "♦") {
    document.querySelector(".topsuit").classList.add("Red");
    document.querySelector(".bottomsuit").classList.add("Red");
    document.querySelector(".cardnumber").classList.add("Red");
  } else {
    document.querySelector(".topsuit").classList.remove("Red");
    document.querySelector(".bottomsuit").classList.remove("Red");
    document.querySelector(".cardnumber").classList.remove("Red");
  }
}
