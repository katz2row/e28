"use strict";

// Charity Katz - E28 Week 2 Game - Spring 2021

window.onload = function() {

    //Create variables for elements
    var getButtons = document.getElementById("player_buttons");
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");
    var scissors = document.getElementById("scissors");
    var playerResult = document.getElementById("player_img");
    var computerResult = document.getElementById("computer_img");

    // Generate a random number between 1-3 to determine computer's selection and then set image source based on random number
    getButtons.addEventListener("click", function() {
        var genNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);

        if (genNum === 1) {
            computerResult.setAttribute("src", "images/rock-400.png");
        } else if (genNum === 2) {
            computerResult.setAttribute("src", "images/paper-400.png");
        } else {
            computerResult.setAttribute("src", "images/scissors-400.png");
        }
    }, false);

    // Set player image source depending on if player clicks rock, paper, or scissors
    rock.onclick = function() {
        playerResult.setAttribute("src", "images/rock-400.png");
    }

    paper.onclick = function() {
        playerResult.setAttribute("src", "images/paper-400.png");
    }

    scissors.onclick = function() {
        playerResult.setAttribute("src", "images/scissors-400.png");
    }

    // Compare image sources for player and computer and define the winner depending on the outcomes
    getButtons.addEventListener("click", function() {
        var playerSrc = document.getElementById("player_img").getAttribute("src");
        var computerSrc = document.getElementById("computer_img").getAttribute("src");

        if ((playerSrc === "images/paper-400.png" && computerSrc === "images/rock-400.png") || (playerSrc === "images/scissors-400.png" && computerSrc === "images/paper-400.png") || (playerSrc === "images/rock-400.png" && computerSrc === "images/scissors-400.png")) {
            document.getElementById("winner").innerHTML = "PLAYER";
        } else if ((playerSrc === "images/scissors-400.png" && computerSrc === "images/rock-400.png") || (playerSrc === "images/rock-400.png" && computerSrc === "images/paper-400.png") || (playerSrc === "images/paper-400.png" && computerSrc === "images/scissors-400.png")) {
            document.getElementById("winner").innerHTML = "COMPUTER";
        } else {
            document.getElementById("winner").innerHTML = "A TIE";
        }

    }, false);

}