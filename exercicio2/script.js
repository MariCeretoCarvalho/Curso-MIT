var button = document.getElementById("incrementButton");
var counter = document.getElementById("count");
var i = 0;

button.addEventListener("click", function() {
 i++;
 counter.textContent = i;
});








// The button element should have the ID “increment” so that we can recognize this button that
// increments the counter.
// 4. The p element should have the ID counter so that we can recognize the paragraph that displays
// the current value of the counter.
// 5. Implement the logic in a JavaScript file (script.js) to handle the counter functionality.
// 6. Store the references to the button and counter elements using getElementById() in the var
// button and var counter variables, respectively.
// 7. The button.addEventListener("click", function() { ... } code snippet listens for the click event on
// the button element.
// 8. It then executes the function inside the curly braces when the event is triggered.
// 9. The function should increment the value of the count variable and update the text content of the
// counter element to reflect the new value.