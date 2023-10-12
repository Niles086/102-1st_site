 // parseInt used to convert user input into numeric format
 function checkAge() {
    let userAge = parseInt(prompt("You must be 18 to ENTER. Please enter your age")); 
 }
// using !isNaN to checks whether a value is Not  a number
if (!isNaN(userAge) && userAge >= 18) {
alert("Welcome to Anime Addict");
// load content for users above the age limit here.

} else {
// If the condition is false, redirect to another site
window.location.href = "https://www.babiesrus.com/";
}
