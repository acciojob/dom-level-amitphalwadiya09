//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Get the target element with the id "level"
    var targetElement = document.getElementById("level");

    // Initialize the DOM level counter
    var domLevel = 1;

    // Traverse the parent elements until reaching the root html element
    while (targetElement && targetElement.parentElement) {
        targetElement = targetElement.parentElement;
        domLevel++;
    }
      
    // Display the result using the alert functio
    alert("The level of the element is: " + domLevel);
});
