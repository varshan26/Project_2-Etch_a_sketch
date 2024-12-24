const AREA = 800;
let SQUARE = 16;

const button = document.querySelector("#button")
button.addEventListener("click",()=>{
    derilict = document.querySelectorAll("#grid")
    derilict.forEach((vals)=>{
        vals.classList.remove("hello")
    })
})


const container = document.querySelector("#container")
let size = `${(AREA/SQUARE)-2}px`
for(let i=0;i<SQUARE;i++){
    for(let j=0;j<SQUARE;j++){
        let div = document.createElement("div");
        div.setAttribute("id", "grid");
        div.style.width=size
        div.style.height=size
        div.classList.add("button")

        container.appendChild(div)
    }
}


const derr = document.querySelectorAll("#grid")
derr.forEach((butt)=>{
    butt.addEventListener("mouseover",()=>{
        butt.classList.add("hello")
    })
})