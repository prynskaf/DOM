/*
Modify the script.js, do not create any new nodes!

- Select the last child of the <ol> tag and put it at the beginning of the list
- Move the <h2> of the third section in the second one and vice-versa
- Delete the last section from the DOM, we don't need it anyways
*/


// Selecting the <ol> element
const ol = document.querySelector('ol');

// Getting the last child of the element
const lastChild = ol.lastElementChild;
console.log("original last child: " , lastChild.innerHTML)

// Move the last child to the beginning of the list
ol.prepend(lastChild);

// Log the updated <ol> element to see the changes
 console.log('move ol list: ' , ol.innerHTML)


 


//- Move the <h2> of the third section in the second one and vice-versa
// Get references to the sections
var sections = document.getElementsByTagName('section');
var secondSection = sections[1];
var thirdSection = sections[2];

// Get references to the <h2> elements
var secondSectionHeading = secondSection.querySelector('h2');
var thirdSectionHeading = thirdSection.querySelector('h2');

// Move the <h2> elements between the sections
secondSection.insertBefore(thirdSectionHeading, secondSection.firstChild);
thirdSection.insertBefore(secondSectionHeading, thirdSection.firstChild);

console.log("Moved <h2> of the third section to the second section.");
console.log("Moved <h2> of the second section to the third section.");

// Get reference to the third section
var thirdSection = document.getElementsByTagName('section')[2];
thirdSection.style.backgroundColor = 'red';

console.log("Changed background color of the third section to red.");

// Remove the third section from the DOM
thirdSection.parentNode.removeChild(thirdSection);
console.log("Deleted the third section.");

