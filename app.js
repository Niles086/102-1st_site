//  function to verify users age
 // parseInt is used to convert user input into numeric format
//  function getAge() {
  //  }
  // // call the getAge function
  // getAge();
  
  let userAge = parseInt(prompt("You must be 18 to ENTER. Please enter your age"));
// function to validate text input
 function isValidText(){
   console.log('The user is', userAge)
  if (isNaN(userAge) ){
    userAge = prompt('Please verify age.');
  }
 }
 
 // call the isValidText function
 isValidText();



 function checkAge() {
   // Check if the user's age is valid and greater than or equal to 18 isNaN is used to check if a value is Not-a-Number It is a logical expression that evaluates to true if the value is a valid number and false if it is not.
   if (!isNaN(userAge) && userAge >= 18) {
     alert("Welcome to Anime Addict");
     // Load content for users above the age limit here.
   } else {
     // If the condition is false, redirect to another site
     window.location.href = "noaccess.html";
   }
 }
 // Call the age verification function when the page loads

 checkAge();


 function getEmail() {
  let email = prompt('Welcome to Anime Addict. Please enter your email to sign up for our mailing list?');
 
  if (email){
      document.write('Thanks for signing up.',email);
      console.log('You have a new user their email is', email)
  } else {
      document.write('Maybe next time')
  }
 }
// call for getEmail function
// getEmail();


// function to suggest site anime
function content() {
  let anime = prompt('What is your favorite anime?');{
    document.write('We have some great content about' + anime)
}
}

// call cor content function
// content();

     