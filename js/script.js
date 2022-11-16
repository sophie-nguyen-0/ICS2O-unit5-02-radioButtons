// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-02-radioButtons/sw.js", {
    scope: "/ICS2O-unit5-02-radioButtons/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const radioButton1 = document.getElementById("option-1").checked

  if (radioButton1 == true) {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    document.getElementById("value").innerHTML =
      "you picked option positive. your number is " + randomNumber + "."
  } else {
    const randomNegativeNumber = Math.floor(Math.random() * -6) + -1

    document.getElementById("value").innerHTML =
      "you picked option negative. your number is " + randomNegativeNumber + "."
  }
}
