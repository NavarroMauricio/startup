
window.addEventListener("load", appearInFullLoad);  //with the event "load" the function is executed when the whole page loads even the stylesheet

function appearInFullLoad() { /* Show the 'hello world' when the page is fully loaded */

	setTimeout(function () {

		const element = document.getElementById("hide");
		element.classList.remove("hidden");
	}, 900);
}

const btn = document.getElementById("btnjoke");

btn.addEventListener("click", getJoke);

function getJoke() {

	fetch("http://api.icndb.com/jokes/random")

		.then(function (response) {
			return response.json();
		})

		.then(function (myJson) {

			showTheJoke(myJson);

		})

		.catch(function (error) {

			errorDetected();

		})
}


//the function to show the joke in the html

function showTheJoke(myJson) {

	document.getElementById("jokeHere").innerHTML = myJson.value.joke;

}


//the function changes the background to red in the section of the joke

function errorDetected() {

	document.querySelector("#jokeZone").style.backgroundColor = "red";

	/* you can also use the function below if you also want to show the user that an error happened in the section of the joke
	
	document.getElementById("jokeHere").innerHTML= "An error has occurred";
	*/

}


// point 4


gitbtn = document.getElementById("gitButton");

gitbtn.addEventListener("click", gitHubSearch);


function gitHubSearch() {  //create the repository list

	const parameter = document.getElementById("valueToSearch").value;

	const urlGit = `https://api.github.com/search/repositories?q=${parameter}`;

	apiCall(urlGit, showItem);

}



function apiCall(url, action) {

	fetch(url)

		.then(data => data.json())


		.then(data => {

			action(data);
		})


		.catch(data => {

			console.log("error detected --> " + data);
		})

}




function showItem(data) {

	const results = data.items;  /* pass only the necessary items*/

	const list = document.getElementById("reposList");

	for (let rep of results) {     /*iterate and show the elements in html*/

		let repName = document.createElement('li');

		repName.innerHTML = rep.full_name;

		list.appendChild(repName);
	}

}

//point 6

function tableGenerator(data) {

	const crypto = data;


	const getTable = document.getElementById("table"); //select the section

	const table = document.createElement("table"); //create the table

	const headtable = document.createElement("tr"); //create the head of the table

	const headElements = ["Name", "Symbol", "Current Price $", "Market Cap Rank", "All Time High $"];

	tableComponent("th", headElements, headtable);  //assign the elements in the table header


	const tableBody = document.createElement("tbody") //create the body of the table

	for (let index of crypto) {

		const line = document.createElement("tr");  //create the table row 

		const lineContent = [index.name, index.symbol, index.current_price.toFixed(4), index.market_cap_rank, index.ath.toFixed(4)]; //necesary elements to get from the api

		tableComponent("td", lineContent, line);

		tableBody.appendChild(line);


	}


	table.appendChild(headtable);

	table.appendChild(tableBody);

	getTable.appendChild(table);


}


//new function to avoid repeat code  while the table is generated

function tableComponent(tagname, textContent, tagFather) {


	for (let i of textContent) {

		let aux = document.createElement(tagname);
		aux.appendChild(document.createTextNode(i));
		tagFather.appendChild(aux);

	}

}


const cryptoURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h%22%20-H%20%22accept:%20application/json";

apiCall(cryptoURL, tableGenerator);