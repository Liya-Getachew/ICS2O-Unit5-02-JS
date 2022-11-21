// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-JS/sw.js", {
    scope: "/ICS2O-Unit5-02-JS/",
  })
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  const buttonOnChecked = document.getElementById("flash1").checked
  const randomNumber = Math.floor(Math.random() * 6) + 1
  const randomNumber2 = Math.floor(Math.random() * -6) + 0

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your positive number is: " + randomNumber
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your negative number is: " + randomNumber2
  }
}
