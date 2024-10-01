document.getElementById("thankYouForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way
    
    // Get the user's name from the input
    const userName = document.getElementById("username").value;
    
    // Get the popup elements
    const popupMessage = document.getElementById("popupMessage");
    const thankYouMessage = document.getElementById("thankYouMessage");
    
    // Set the personalized thank you message
    thankYouMessage.innerHTML = `Thank you, ${userName}, for visiting Illume Readers Konnect!`;
    
    // Show the popup message and image
    popupMessage.style.display = "block";
    
    // Optionally, you can hide the form after submission
    //document.getElementById("thankYouForm").style.display = "none";
});
