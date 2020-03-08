
function appearInFullLoad(){ /* Show the 'hello world' when the page is fully loaded */

setTimeout(function() {
  
    const element = document.getElementById("hide");
    element.classList.remove("hidden");              
    },700);
}


function getJoke(){
fetch("http://api.icndb.com/jokes/random")
.then(function(response) { 
return response.json();
})
.then(function(myJson) {            

showTheJoke(myJson);

})
.catch(function(error){

errorDetected();

})
}


//the function to show the joke in the html

function showTheJoke(myJson){
document.getElementById("jokeHere").innerHTML= myJson.value.joke;
}


//the function changes the background to red in the section of the joke
function errorDetected(){

document.getElementById("jokeZone").style.backgroundColor="red";

/* you can also use the function below if you also want to show the user that an error happened in the section of the joke
document.getElementById("jokeHere").innerHTML= "An error has occurred";
*/

}
