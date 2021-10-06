const quotesDiv = document.querySelector("#quotesDiv");
const result = document.getElementById("result");

// referenced https://stackoverflow.com/questions/65117741/how-do-i-call-a-random-function-on-button-click for solution to randomize the query functions
const randomFunc = [getKayneQuote, getFamousQuote];





function getAnswer(data) {
  answer = data.currentTarget.getAttribute("data-answer");
  console.log(answer);
  let actualAnswer = document.querySelector(".answer").id;

  if (actualAnswer == answer) {
    console.log("win");
    result.innerText = "You got that one right! Try this one";
    result.style.color = "#258749";
  } else {


 // else {
    
  //   if () {
  //     console.log("lose");
  //     result.innerHTML = `You got that one wrong, try again `;
  //     result.style.color = "#D23232";
  //   } else {
  //     console.log("lose");
  //     result.innerHTML = `You got that one wrong, try again <span><a style="color:#258749; text-decoration: underline;" href="https://en.wikipedia.org/wiki/Special:Search?search=${randomQuoteAuthor}" target="_blank" >${randomQuoteAuthor}</a></span> said ${randomQuoteText}`;
  //     result.style.color = "#D23232";
  //   }

    console.log("lose");
    result.innerHTML = `You got that one wrong, try again <span><a style="color:#258749; text-decoration: underline;" href="https://en.wikipedia.org/wiki/Special:Search?search=${randomQuoteAuthor}" target="_blank" >${randomQuoteAuthor}</a></span> said ${randomQuoteText}`;
    result.style.color = "#D23232";
  }








  randomFunc[Math.floor(Math.random() * randomFunc.length)]();
}



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
      quotesDiv.innerText = `"${kanyeData.quote}"`;
      quotesDiv.setAttribute("id", "yes");

      //
      KayneQuoteAuthor = "Kayne";
      console.log(KayneQuoteAuthor);

    });
}

function getFamousQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((famousData) => {
      //quotesDiv.innerText = famousData[Math.floor(Math.random() * 1000)].author;
      //randomQuote = famousData[Math.floor(Math.random() * 1000)].text;
      randomQuote = famousData[Math.floor(Math.random() * 1000)];
      randomQuoteText = randomQuote.text;
      randomQuoteAuthor = randomQuote.author;
      quotesDiv.innerText = `"${randomQuoteText}"`;
      quotesDiv.setAttribute("id", "no");

      console.log(randomQuoteAuthor);
      console.log(randomQuoteText);
    });
}
