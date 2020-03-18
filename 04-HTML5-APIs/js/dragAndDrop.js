const handleFileSelect = (event) => {

    event.stopPropagation();
    event.preventDefault();

    const files = event.dataTransfer.files;

    for (let i of files) {
        if (i.type == "text/plain") {
            const read = new FileReader();
            read.readAsText(i);
            read.onload = (event) => {
                handleDragLave(event);
                document.getElementById("file-content").innerHTML = `File type : ${i.type} || Name: ${i.name} || Content:  ${event.target.result}`;
            }
        } else {
            console.log("only .txt files are available ");
        }
    }

}

function handleDragOver(event) {

    event.stopPropagation();
    event.preventDefault();
    box.classList.add("drag-box-light");
}

function handleDragLave(event) {

    event.stopPropagation();
    event.preventDefault();
    box.classList.remove("drag-box-light");
}


const box = document.getElementById("drop-zone");
box.addEventListener("dragover", handleDragOver);
box.addEventListener("drop", handleFileSelect);
box.addEventListener("dragleave", handleDragLave);