const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const taskInput =document.getElementById("addBtn");

function addTask(){
    if (inputBox.value ==='') {
        alert( "You Must Write Something!!" );
        
        document.querySelector(".list-box").style.display = "none";
    } else {
        let li = document.createElement('li'); 
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement( 'span' ) ;  
        span.innerHTML= "X";
        li.appendChild(span);
        
        
        document.querySelector(".list-box").style.display = "block";
        checkListBox();
    }

    inputBox.value='';
    savedata();
}
function Clearall(){
  listContainer.innerHTML='';
  checkListBox();
  localStorage.removeItem('data');
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'Clear All'){
        Clearall();
    }
});
inputBox.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        addTask();
    }
});
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle( "checked" );
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    checkListBox();
    
},false);

function checkListBox() {
    let listBox = document.getElementById("list-box");
    if (listContainer.childElementCount === 0) {
        listBox.style.display = "none"; // Hide the list box
    } else {
        listBox.style.display = "block"; // Show the list box
    }
}
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
    checkListBox();
}
showTask();

