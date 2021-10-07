document.querySelector("#yes").addEventListener("click", getAnswer);
document.querySelector("#no").addEventListener("click", getAnswer);

function getAnswer(data) {
  // this is the users answer that is taken from the data attribute contained in the input buttons
  answer = data.currentTarget.getAttribute("data-answer");
  console.log(answer);

  // this takes the true answer from the answer set by the query functions to the div id attribute
  let actualAnswer = document.querySelector(".answer").id;

  // rewrite this section to take 4 conditions
  //  actual answer is yes and users answer is yes - that is correct(display correct)
  //  actual answer is yes and users answer is no - that is incorrect (display incorrect)
  //  actual answer is no and users answer is yes - that is incorrect (display correct) -> (display wiki)
  //  actual answer is no and users answer is no - that is correct (display correct)

  // attempting fix
  // quotesDiv.setAttribute("author", "kayne");

  // this conditional compares the the users answer
  if (actualAnswer === "yes" && answer === "yes") {
    console.log("win");
    result.innerText = "You got that one right! Try this one";
    result.style.color = "#258749";
  } else if (actualAnswer === "yes" && answer === "no") {
    console.log("lose");
    result.innerHTML = "You got that one wrong, try again";
    result.style.color = "#D23232";
  } else if (actualAnswer === "no" && answer === "yes") {
    console.log("lose");
    result.innerHTML = `You got that one wrong, try again <span><a style="color:#258749; text-decoration: underline;" href="https://en.wikipedia.org/wiki/Special:Search?search=${randomQuoteAuthor}" target="_blank" >${randomQuoteAuthor}</a></span> said ${randomQuoteText}`;
    result.style.color = "#D23232";
  } else if (actualAnswer === "no" && answer === "no") {
    result.innerText = "You got that one right! Try this one";
    result.style.color = "#258749";
  }
  // END OF GET ANSWER FUNCTION
  // fire function for next quotesDiv that was set when either of the quote functions are called
  randomFunc[Math.floor(Math.random() * randomFunc.length)]();
}

// fire function on page load to fetch initial quote
const randomFunc = [getKayneQuote, getFamousQuote];
randomFunc[Math.floor(Math.random() * randomFunc.length)]();

// this is where the query function set a yes or no value depending on if it's a Kanye quote
const quotesDiv = document.querySelector("#quotesDiv");

// this is the element where the users result is output
const result = document.getElementById("result");

// get Kanye quote function
function getKayneQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((kanyeData) => {
      quotesDiv.innerText = `"${kanyeData.quote}"`;
      quotesDiv.setAttribute("id", "yes");

      // console debugging
      KayneQuoteAuthor = "Kayne";
      kanyeQuoteText = `"${kanyeData.quote}"`;
      console.log(KayneQuoteAuthor);
      console.log(kanyeQuoteText);
    });
}

// get random famous quote function
function getFamousQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((famousData) => {
      randomQuote = famousData[Math.floor(Math.random() * 1000)];
      randomQuoteText = randomQuote.text;
      randomQuoteAuthor = randomQuote.author;
      quotesDiv.innerText = `"${randomQuoteText}"`;
      quotesDiv.setAttribute("id", "no");

      // console debugging
      console.log(randomQuoteAuthor);
      console.log(randomQuoteText);
    });
}
