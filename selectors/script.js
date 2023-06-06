


// Add title attribute to elements with the important class
const importantElements = document.querySelectorAll(".important");



// TO give additional context "setAttribute"
for(const elements of importantElements) {
    elements.setAttribute("title" , "This is an important item");
}
console.log('Element with imortant "important" class:', importantElements);







// selecting all img with important class  and hidding them to none
const imgElements = document.querySelectorAll('img');
for(const img of imgElements) {
    if (!img.classList.contains('important')){
        img.style.display = 'none';
    }
}
console.log('Images with "imoportant" class:' , imgElements);





// Display content of paragraphs and classnames (if applicable)
const paragraphElements = document.querySelectorAll('p');

for(const paragraph of paragraphElements) {
    console.log('Paragraph content:' , paragraph.textContent); 
    
    if (paragraph.classList.length > 0) {
        console.log('class:' , paragraph.className);
    }


    
    
//applying a random text color to paragraphs without a class
if (paragraph.classList.length === 0) {
    const randomColor = getRandomColor();
    paragraph.style.color = randomColor;
    console.log("Paragraph color:" , randomColor)
}

}
 

// function to generate a ramdom color
function getRandomColor() {
    const letters = '0123456789ABCDEF#';
    let color = "#"

    for (let i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}






