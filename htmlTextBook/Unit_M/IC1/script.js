/* 
   Spotted Wren Garden Center
   Filename: script.js

   Author: Mitchell Mudd
   Date: 03/24/2024   
   HTML5 and CSS3 Illustrated Unit M, Independent Challenge 1
 */

// Declare variables
var list = document.querySelector(".choices-list");
var blanket = document.querySelector(".choices-list li:first-of-type");
var hedge = document.querySelector(".choices-list li:nth-of-type(2)");
var bluestem = document.querySelector(".choices-list li:last-of-type");
var figureImage = document.querySelector("article figure img");
var figureCaption = document.querySelector("article figure figcaption");

// Define functions
function showBlanket() {
  figureImage.src = "images/blanket.jpg";
  figureImage.alt = "a single blossom of a blanket flower";
  figureCaption.textContent = '"Blanket flower"';
}

function showHedge() {
  figureImage.src = "images/rugosa.jpg";
  figureImage.alt = "a sprawling, low hedge rose plant with several flowers";
  figureCaption.textContent = '"Hedge rose"';
}

function showBluestem() {
  figureImage.src = "images/bluestem.jpg";
  figureImage.alt = "a cluster of little bluestem in a field";
  figureCaption.textContent = '"Little bluestem"';
}

// Add event listeners
blanket.addEventListener("click", showBlanket, false);
hedge.addEventListener("click", showHedge, false);
bluestem.addEventListener("click", showBluestem, false);
