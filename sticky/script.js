countEl = 0
countEl2 = 0
countEl3 = 0
countEl4 = 0


user = []

function save(){
    user.push(document.getElementById("input").value)
    document.getElementById("input").value = " "
    localStorage.setItem("myleads", JSON.stringify(user))
    loopThroughArray() 
}

const fromLocal = JSON.parse(localStorage.getItem("myleads"))

if(fromLocal) {
    user = fromLocal
    loopThroughArray()
}

function loopThroughArray(){
    listItem = ""
    for(i = 0; i<user.length; i++){
        listItem +=
        `
        <p style = "
        border-top: 5px solid rgb(79, 251, 79);
        padding-top: 10px;
        margin-left: 10px;
        height: 60px;
        width: 85%;
        color: rgb(224, 222, 222);
        padding-left: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 17px;
        background-color: rgb(56, 55, 55);
    ">
        ${user[i]}
        </p>
        `
    } 
    document.getElementById("textholder").innerHTML = listItem
}

function deleteAll(){
    localStorage.removeItem("myleads")
     user= []
     loopThroughArray()
}
function createNewNote(){
    document.querySelector(".body2").style.display = "block"
    document.getElementById("textholder").style.display = "block"
    document.getElementById("preText").style.display = "none"
    
}
function removeNote(){
    document.querySelector(".body2").style.display = "none"
}
function palette(){
    document.querySelector(".palette").style.display = "flex"
    document.querySelector(".palette-btn").style.display = "block"
}
function closePalette(){
    document.querySelector(".palette").style.display = "none"
    document.querySelector(".palette-btn").style.display = "none"
}
function yellow(){
    document.querySelector(".nav").style.backgroundColor = "rgb(255, 255, 11)";
    document.querySelector(".nav").style.transition = ".900s"
    document.querySelector(".div1").style.backgroundColor = "rgb(255, 255, 11)";
    document.querySelector(".div2").style.backgroundColor = "rgb(255, 255, 11)";
    document.querySelector(".div1").style.transition = ".900s"
}

function green(){
    document.querySelector(".nav").style.backgroundColor = "rgb(79, 251, 79)";
    document.querySelector(".nav").style.transition = ".900s"
    document.querySelector(".div1").style.backgroundColor = "rgb(79, 251, 79)";
    document.querySelector(".div2").style.backgroundColor = "rgb(79, 251, 79)";
    document.querySelector(".div1").style.transition = ".900s"
}

function pink(){
    document.querySelector(".nav").style.backgroundColor = "rgb(255, 162, 178)";
    document.querySelector(".nav").style.transition = ".900s"
    document.querySelector(".div1").style.backgroundColor = "rgb(255, 162, 178)";
    document.querySelector(".div2").style.backgroundColor = "rgb(255, 162, 178)";
    document.querySelector(".div1").style.transition = ".900s"
}

function purple(){
    document.querySelector(".nav").style.backgroundColor = "rgb(144, 4, 144)";
    document.querySelector(".nav").style.transition = ".900s"
    document.querySelector(".div1").style.backgroundColor = "rgb(144, 4, 144)";
    document.querySelector(".div2").style.backgroundColor = "rgb(144, 4, 144)";
    document.querySelector(".div1").style.transition = ".900s"
}

function blue(){
    document.querySelector(".nav").style.backgroundColor = "rgb(89, 89, 250)";
    document.querySelector(".nav").style.transition = ".900s"
    document.querySelector(".div1").style.backgroundColor = "rgb(89, 89, 250)";
    document.querySelector(".div2").style.backgroundColor = "rgb(89, 89, 250)";
    document.querySelector(".div1").style.transition = ".900s"
}

function gray(){
    document.querySelector(".nav").style.backgroundColor = "gray";
    document.querySelector(".nav").style.transition = ".900s"
    document.querySelector(".div1").style.backgroundColor = "gray";
    document.querySelector(".div2").style.backgroundColor = "gray";
    document.querySelector(".div1").style.transition = ".900s"
}

function black(){
    document.querySelector(".nav").style.backgroundColor = "rgb(69, 69, 69)";
    document.querySelector(".nav").style.transition = ".900s"
    document.querySelector(".div1").style.backgroundColor = "rgb(69, 69, 69)";
    document.querySelector(".div2").style.backgroundColor = "rgb(69, 69, 69)";
    document.querySelector(".div1").style.transition = ".900s"
}

  function text(obj){
      alpha = obj.value
      document.getElementById("textholder").textContent =  alpha
  }


function settings(){
    document.querySelector(".set").style.display = "block"
}
function x(){
    document.querySelector(".set").style.display = "none"
}
function light(){
    alert("coming soon")
}
function yes(){
    localStorage.clear()
    user = []
    loopThroughArray()
}

function angry(){
     countEl = countEl + 1
     document.getElementById("angry").textContent = countEl
     document.getElementById("angry").style.display = "block"
     localStorage.setItem("angry", JSON.stringify(countEl))
}
function notHappy(){
    countEl2++

    document.getElementById("nothappy").textContent = countEl2
    document.getElementById("nothappy").style.display = "block"
    localStorage.setItem("nothappy", JSON.stringify(countEl2))
}
function good(){
    countEl3++

    document.getElementById("good").textContent = countEl3
    document.getElementById("good").style.display = "block"
    localStorage.setItem("good", JSON.stringify(countEl3))
}
function excellent(){
    countEl4++

    document.getElementById("excellent").textContent = countEl4
    document.getElementById("excellent").style.display = "block"
    localStorage.setItem("excellent", JSON.stringify(countEl4))
}

function dark(){
    alert("You are in Darkmode!")
}