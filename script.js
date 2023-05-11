
// Add list item

const inputType = document.getElementById("itemType");
const toDoList = document.getElementById("listLtems");


function addToDoItem(){
    if(itemType.value == ""){
       alert("There is no value for To-Do, you must have to write something!");
    }
    else{
        let listItem = document.createElement("li");
        listItem.innerHTML = inputType.value;
        toDoList.appendChild(listItem);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    }
    itemType.value = "";
    saveList();
}


toDoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName === "SPAN"){
        confirm("Are you sure, you want to delet this item?");
        e.target.parentElement.remove();
        saveList();
    }   
}, false);



function saveList(){
    localStorage.setItem("data", toDoList.innerHTML);
} 
function showMyList(){
    toDoList.innerHTML = localStorage.getItem("data");
}
showMyList();