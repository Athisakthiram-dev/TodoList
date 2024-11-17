const inputBox=document.getElementById("inputBox")
const listContainer=document.getElementById("listContainer")
function addTask(){
    if(inputBox.value ===''){
    alert("Please add the task");
    }else{
    let element=document.createElement("li");
    element.innerHTML=inputBox.value;
    listContainer.appendChild(element);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    element.appendChild(span);

}
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);
function saveData(){
    localStorage.setItem=("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();