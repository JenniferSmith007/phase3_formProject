let mainDiv = document.getElementById("main_con");
let header = document.getElementById("header");
let contactSec = document.getElementById("contact_section");
let contactTitle = document.createElement("h2");
let contactPara = document.createElement("p");
let nameInput = document.createElement("INPUT");
let emailInput = document.createElement("INPUT");
let dateInput = document.createElement("INPUT");
let textInput = document.createElement("INPUT");
let selectBox = document.createElement("SELECT");
let checkbox = document.createElement("INPUT");
let radioButton = document.createElement("INPUT");
let button = document.createElement("button");

header.textContent = "Contact Details";
button.textContent = "submit";
contactTitle.textContent = "We can't wait to meet you.";
contactPara.textContent =
  "Please fill out the details below, and we will be in touch.";
nameInput.setAttribute("type", "name");
nameInput.setAttribute("placeholder", "name");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "email");
textInput.setAttribute("type", "text");
textInput.setAttribute("placeholder", "Tell us more");
dateInput.setAttribute("type", "date");
selectBox.setAttribute("type", "SELECT");
checkbox.setAttribute("type", "checkbox");
radioButton.setAttribute("type", "radio");
button.setAttribute("type", "submit");

mainDiv.appendChild(header);
mainDiv.appendChild(contactSec);
contactSec.appendChild(contactTitle);
contactSec.appendChild(contactPara);
mainDiv.appendChild(nameInput);
mainDiv.appendChild(emailInput);
mainDiv.appendChild(textInput);
mainDiv.appendChild(dateInput);
mainDiv.appendChild(selectBox);
mainDiv.appendChild(checkbox);
mainDiv.appendChild(radioButton);
mainDiv.appendChild(button);





document.body.style.backgroundColor = "#FCFCFF";
document.body.style.fontFamily = "arial";
mainDiv.style.display='flex'
mainDiv.style.flexDirection='column'
// mainDiv.style.justifyContent='center'

header.style.backgroundColor = "#E4E4F5";
header.style.borderRadius='.3em'
// header.style.alignSelf='center'
// header.style.textAlign='center'

mainDiv.style.width = "25em";
mainDiv.style.height = "30em";
