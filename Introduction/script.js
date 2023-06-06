// page title
let pageTItle =  document.querySelector("#title");
console.log(pageTItle.textContent);


// adding font and color to the body
 let font = "Arial";
 let color = "rgb(100, 120, 80)";

 document.body.style.fontFamily = font;
 document.body.style.background = color; 
 console.log(color , font);



 //finding the children Elements
// let contextElement = document.getElementById("content");
// let ulElements = contextElement.querySelectorAll("ul");
// let liElements = contextElement.querySelectorAll("li");

// console.log(ulElements.inner);
// console.log(liElements);

const listItems = document.querySelectorAll("ul > li");
console.log(listItems); 








