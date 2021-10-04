const quotesDiv = document.querySelector("#quotesDiv");
const randomFunc = [getKayneQuote, getFamousQuote];
let author;

function getAnswer(data) {
  console.log(data);
}

document.querySelector("#yes").addEventListener("click", getAnswer("yes"));

document.querySelector("#no").addEventListener("click", getAnswer("no"));

// console.log(document.querySelector("#yes").value);
// console.log(document.querySelector("#no").value);

document.querySelector("#getQuote").addEventListener("click", function () {
  randomFunc[Math.floor(Math.random() * randomFunc.length)]();
});

function getKayneQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((kanyeData) => {
      console.log(kanyeData.quote);
      quotesDiv.innerText = kanyeData.quote;
      let author = "kanyeWest";
    });
}

function getFamousQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((famousData) => {
      // quotesDiv.innerText = famousData[Math.floor(Math.random() * 1000)].author;
      quotesDiv.innerText = famousData[Math.floor(Math.random() * 1000)].text;
      let author = "famousPerson";
    });
}
