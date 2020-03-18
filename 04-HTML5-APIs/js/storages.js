const text = document.getElementById("textArea");
const save = document.getElementById("saveBut");
const deleteBut = document.getElementById("deleteBut");
const txtId = "text-area";


//local Storage

function saveLocal(id, elem) {
    localStorage.setItem(id, elem.value);
}

function deletLocal() {
    localStorage.clear();
}



//IndexedDB

const request = window.indexedDB.open("IndexedDBTopic-3", 3); //create the indexedDB
let data;

request.onsuccess = () => {
    data = request.result;
    console.log("sucess in indexedDB");
}

request.onupgradeneeded = () => {
    data = request.result;
    data.createObjectStore(txtId, { autoIncrement: true })

}

request.onerror = (error) => {
    console.log(request.result);
    console.log("Database error : " + error);
}


const savedb = (id, elem) => {
    const transaction = data.transaction([id], "readwrite");
    const objectStore = transaction.objectStore(id);
    const aux = objectStore.add(elem);
}


const deleteDB = (id) => {
    const transaction = data.transaction([id], "readwrite");
    const objectStore = transaction.objectStore(id);

    objectStore.clear();
}


const saveTextArea = (e) => {  //save in local storage & indexedDB

    e.preventDefault();

    try {
        saveLocal(txtId, text);
        savedb(txtId, text.value);


    } catch (error) {
        console.log("failed" + error);
    }
}


const deleTextArea = (e) => {   //dele in local storage & indexedDB

    e.preventDefault();

    try {
        deletLocal();
        deleteDB(txtId);

    } catch (error) {
        console.log("failed " + error);
    }
}


save.addEventListener("click", saveTextArea);
deleteBut.addEventListener("click", deleTextArea);