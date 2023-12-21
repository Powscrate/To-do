const input = document.getElementById("inputs");
const lists = document.getElementById("list-container");
const bt = document.getElementById("btt");
function Add(){
    if(input.value === ''){
        alert("Écrivez quelques chose");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d8";
        li.appendChild(span);
    }
    input.value = "";
    saveData();   
}

document.addEventListener('keydown', function(event) {
    // Vérifiez si la clé enfoncée est la touche "Enter"
    if (event.key === 'Enter') {
        // Déclenchez un clic sur le bouton
        bt.click();
    }
});

lists.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", lists.innerHTML);
}
function show(){
    lists.innerHTML = localStorage.getItem("data");
}
show();