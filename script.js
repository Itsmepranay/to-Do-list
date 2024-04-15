let oldTag = document.querySelector(".container");
let x=1;
let y=2;
let z=1000000;
const newEntry = () => {
  let divi=document.createElement("div");
  divi.setAttribute("id",z);
  divi.setAttribute("class","diviii");
  let para = document.createElement("button");
  para.setAttribute("id", "b"+y);
  para.setAttribute("class", "list");
  para.setAttribute("type", "button");
  para.setAttribute("onclick","overshit("+y+")");
  para.innerHTML="Done"
  let lab = document.createElement("p");
  lab.setAttribute("id", x);
  lab.setAttribute("class", "list1");
  lab.innerHTML = document.querySelector("#entry").value;
  divi.appendChild(lab);
  divi.appendChild(para);
  oldTag.after(divi);
  oldTag = document.getElementById(z);
  z=z+1;
  x=x+2;
  y=y+2;
  console.log((lab.getAttribute("id")));
  console.log(para.getAttribute("id"));
};

const overshit=(y)=>{
  console.log(y);
  let paragraph=document.getElementById((y-1));
  paragraph.style.textDecoration="line-through";
}



