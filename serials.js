document.addEventListener("DOMContentLoaded",()=>{
    let elName = document.getElementById("elname");
    let elDesc = document.getElementById("eldesc");
    let elBtn = document.getElementById("elbtn");
    let listName = document.getElementById("listname");
    let listDesc = document.getElementById("listdesc");
    let listBtn = document.getElementById("listbtn");
    let elDiv = document.getElementById("elements");

    function storageLoading() {
        let elements = JSON.parse(localStorage.getItem("serials")) || [];
        elDiv.innerHTML = elements.map((element, index) => 
            `<div class="element"> <b> Имя: ${element.elementName} <br> Описание: ${element.desc}  <button onclick="deleteElement(${index})">удалить</button></div>`).join("");
    }
    window.deleteElement = function(index) {
        let elements = JSON.parse(localStorage.getItem("serials")) || [];
        elements.splice(index, 1);
        localStorage.setItem("serials",JSON.stringify(elements));
        storageLoading();
    }
    function saveElement() {
        elementName = elName.value.trim();
        desc = elDesc.value.trim();
        if(elementName && desc){
            let elements = JSON.parse(localStorage.getItem("serials")) || [];
            elements.push({elementName,desc});
            localStorage.setItem("serials",JSON.stringify(elements));
            storageLoading();
            elName.value = ""
            elDesc.value = ""
        }
        else{
            alert("Неверно заполнены поля ввода")
        }
    }
    elBtn.addEventListener('click',saveElement)
    storageLoading()
})