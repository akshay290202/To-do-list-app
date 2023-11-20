const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listcontainer");

function AddTask(){
    if( inputBox.value === ''){
        alert("You must write something!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listContainer.addEventListener("click",function(val){
    if(val.target.tagName === "LI"){
        val.target.classList.toggle("checked");
        savedata();
    }
    else if(val.target.tagName === "SPAN"){
        val.target.parentElement.remove();
    }
},false);

function savedata (){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}