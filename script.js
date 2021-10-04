const quotesDiv = document.querySelector("#quotesDiv");

const randomFunc = [getKayneQuote, getFamousQuote];

document.querySelector("#getQuote").addEventListener("click", function () {
  randomFunc[Math.floor(Math.random() * randomFunc.length)]();
});

function getKayneQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((kanyeData) => {
      console.log(kanyeData.quote);
      quotesDiv.innerText = kanyeData.quote;
    });
}

function getFamousQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((famousData) => {
      quotesDiv.innerText = famousData[Math.floor(Math.random() * 1000)].author;
    });
}
