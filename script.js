// Declare variables
let tokenNumber = 100;
let tokenList = [];

// Get DOM elements
const generateBtn = document.getElementById("generate-btn");
const nextBtn = document.getElementById("next-btn");
const activeTokenEl = document.getElementById("active-token");
const tokenListEl = document.getElementById("token-list");
const tokenNumberEl = document.getElementById("token-number");
const patientNameEl = document.getElementById("patient-name");

// Add event listeners
generateBtn.addEventListener("click", generateToken);
nextBtn.addEventListener("click", callNextToken);

// Function to generate new token
function generateToken() {
  const patientName = prompt("Enter Patient Name:");
  if (patientName) {
    tokenNumber++;
    tokenNumberEl.innerText = tokenNumber;
    patientNameEl.innerText = patientName;
    activeTokenEl.innerText = `Token ${tokenNumber}`;
    tokenList.push(`Token ${tokenNumber} - ${patientName}`);
    const newTokenEl = document.createElement("li");
    newTokenEl.className = "list-group-item";
    newTokenEl.innerText = `Token ${tokenNumber} - ${patientName}`;
    tokenListEl.appendChild(newTokenEl);
  }
}

// Function to call next token
function callNextToken() {
  if (tokenList.length > 0) {
    const nextToken = tokenList.shift();
    activeTokenEl.innerText = nextToken;
  } else {
    activeTokenEl.innerText = "No Active Token";
  }
}
