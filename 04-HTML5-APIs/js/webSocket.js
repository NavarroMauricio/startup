
function createServer() {

    const url = "wss://javascript.info/article/websocket/demo/hello";
    const webScoket = new WebSocket(url, "protocolOne");

    webScoket.onopen = () => {

        console.log("[open] Connection established");

        onOpen();
    };


    const messageToServer = document.getElementById("sendToServer");

    messageToServer.addEventListener('keypress', function (e) {    //get the message from the user 

        if (e.key === 'Enter') {

            console.log(messageToServer.value);

            webScoket.send(messageToServer.value);
        }
    });



    webScoket.onmessage = (event) => {

        console.log("received data from server : " + event.data); //message from server

        serverResponse(event);
    };


    webScoket.onclose = (event) => {

        if (event.wasClean) {

            console.log("connection closed cleany , code:" + event.code + " reason " + event.reason);

            onclose();

        } else {

            console.log("connection lost");
        }
    };

    webScoket.onerror = (error) => {

        console.log("erorr :" + error.message);

        onError();
    };

}

const status = document.getElementById("status");
const response = document.getElementById("responseFromSv");

const onOpen = (event) => {

    status.className = "success";
    status.innerHTML = 'Connected to server'
}

const onclose = (event) => {

    status.className = "error";
    status.innerHTML = "Not connected"
}

const onError = (event) => {

    status.className = "error";
    status.innerHTML = "ERROR";
}

const serverResponse = (event) => {

    response.innerHTML = "response from server : " + event.data;
    console.log(event);
}

window.addEventListener("load", createServer);
