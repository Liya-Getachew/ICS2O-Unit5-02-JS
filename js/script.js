// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-JS/sw.js", {
    scope: "/ICS2O-Unit5-02-JS/",
  })
}

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function displays an alert.
 */
function generate() {
  checked = document.getElementById("button1").checked

  if (checked == true) {
    document.getElementById("number").innerHTML = "hi"
  } else {
    document.getElementById("number").innerHTML = "bye"
  }
}
