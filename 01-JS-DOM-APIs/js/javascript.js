
function appearInFullLoad(){ /* Show the 'hello world' when the page is fully loaded */

setTimeout(function() {
  
    const element = document.getElementById("hide");
    element.classList.remove("hidden");              
    },700);
}

function alertFunction(){  
    alert("an alert message");
}