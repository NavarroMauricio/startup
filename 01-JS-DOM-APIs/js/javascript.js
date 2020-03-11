
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


// point 4


function search(){

const parameter= document.getElementById("valueToSearch").value;

const url=`https://api.github.com/search/repositories?q=${parameter}`;

fetch(url)
.then(data => data.json())
.then(data =>{
    showItem(data);
})
.catch(data =>{
    console.log("error detected");
})


}

function showItem(data) {

const results = data.items;  /* pass only the necessary items*/ 

const list = document.getElementById("reposList"); 

for(let rep of results){     /*iterate and show the elements in html*/

    let repName= document.createElement('li');

    repName.innerHTML = rep.full_name;

    list.appendChild(repName);    
}

}
