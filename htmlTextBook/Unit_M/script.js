/* 
   Lakeland Reeds Bed & Breakfast style sheet 
   Filename: script.js

   Author: Mitchell Mudd
   Date: 03/24/2024     
   HTML5 and CSS3 Illustrated Unit M, Lessons
 */

var fromValue = document.querySelector(".feedback-from");

var contentValue = document.querySelector(".feedback-content");

var nameField = document.querySelector("#nameinput");

var feedbackField = document.querySelector("#other-info");

var form = document.querySelector(".contact-form");

var feedbackPreview = document.querySelector(".feedback-preview");

var submitButton = document.querySelector(".submitbutton");

function completePreview() {
  fromValue.textContent = nameField.value;

  contentValue.textContent = feedbackField.value;

  feedbackPreview.classList.add("show");

  if (form.checkValidity()) {
    submitButton.classList.add("show");
  }
}

form.addEventListener("change", completePreview, false);
