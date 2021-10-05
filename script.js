const quotesDiv = document.querySelector("#quotesDiv");
const result = document.getElementById('result');

// referenced https://stackoverflow.com/questions/65117741/how-do-i-call-a-random-function-on-button-click for solution to randomize the query functions
const randomFunc = [getKayneQuote, getFamousQuote];


function getAnswer(data) {
  answer = data.currentTarget.getAttribute("data-answer");
  console.log(answer);
  let actualAnswer = document.querySelector(".answer").id;

  if (actualAnswer == answer) {
    console.log("win");
    result.innerText = "You got that one right! Try this one";
    result.style.color = "green";
    
  } else {
    console.log("lose");
    result.innerText = "You got that one wrong, try again";
    result.style.color = "red";
  }

  randomFunc[Math.floor(Math.random() * randomFunc.length)]();
}

document.querySelector("#yes").addEventListener("click", getAnswer);
document.querySelector("#no").addEventListener("click", getAnswer);

// referenced https://stackoverflow.com/questions/65117741/how-do-i-call-a-random-function-on-button-click for solution to randomize the query functions
randomFunc[Math.floor(Math.random() * randomFunc.length)]();



// I removed this so the page loads pre populated with the quote.
// document.querySelector("#getQuote").addEventListener("click", function () {
//   randomFunc[Math.floor(Math.random() * randomFunc.length)]();
// });

function getKayneQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((kanyeData) => {
      console.log(kanyeData.quote);
      quotesDiv.innerText = `"${kanyeData.quote}"`;
      quotesDiv.setAttribute("id", "yes");
    });
}

function getFamousQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((famousData) => {
     //quotesDiv.innerText = famousData[Math.floor(Math.random() * 1000)].author;
     randomQuote = famousData[Math.floor(Math.random() * 1000)].text;
     quotesDiv.innerText = `"${randomQuote}"`;
     quotesDiv.setAttribute("id", "no");
    });
}
