







// . You'll need an HTML file with a form that includes an input field for the user to enter their name,
// a submit button, and a place to display the welcome message.
// 3. The form element should have the ID myForm, which will be the form that the user will interact
// with.
// 4. The name attribute of the form element is used to identify the form. This attribute is required if
// you want to submit the form data to a server.
// 5. The input element should have the type text and the name name which is the input field where
// the user will enter their name.
// 6. The input element should have the type submit which is the button that the user will select to
// submit the form.
// 7. The script element should contain the JavaScript code that will be executed when the form is
// submitted.
// 8. The preventDefault() method of the event object is used to prevent the default action of the form
// submission, which is to reload the page.
// 9. The form.addEventListener("submit", function(event) { ... } code snippet listens for the submit
// event on the form element
// 10.It executes the function inside the curly braces when the event is triggered.
// 11.The textContent property of the p element is used to set the text content of the paragraph.
// 12.The function gets the value of the name input field and sets the text content of the
// welcomeMessage paragraph to a welcome message that includes the name.