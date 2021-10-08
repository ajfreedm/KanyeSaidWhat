# KanyeSaidWhat

### KanyeSaidWhat: 
<https://ajfreedm.github.io/KanyeSaidWhat/>    
  
    
### App Description:
   
    The app will display a randomized quote taken either from kanye.rest API from the famous quote API. The end user will have to answer the question using a button if they think the quote is from Kayne West or a some other famous person.
    
### API's Used: 
    
   Kayne.rest API: https://kanye.rest/
   Famous Quotes API: https://type.fit/api/quotes
    
### API Snippet:
   Kayne.rest API Result Snippet: 
 ``` 
{
    "quote": "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun."
}

 ``` 
  Type.fit API Result Snippet:
 ``` 
{
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
}
 ```
   
### Wireframes:
<https://www.figma.com/file/P6JKDp5DQmXtHlwuGyfTKi/Untitled?node-id=0%3A1> 
    
### MVP:
    - Display a random quote to the end user
    - User must read the quote and determine if it is a quote from Kayne West or another famous person
    - If the user answer correctly he will be displayed another quote
    - If the user answers incorrectly, he will be displayed the correct author and will be displayed another quote to try again
    
### Post-MVP: 
    
    - Adding a link to the Wikipedia page of the famous person if the person if the Quote is not Kanyes.
    
### Goals:
    
    I first plan on building on rough website. Second I will fetch the API data and manipulate the DOM accordingly.

### Timeframes
| Component        | Time Spent       
| ------------- |:-------------:| 
| Pseudocode Javascript      | 2hr | 
| Javascript Code      | 8hr      |  
| Debugging with Console Log | 6hr      |  
| HTML Stucture      | 6hr | 
| DOM Manipulation      | 6hr      |  
| CSS Styling | 3hr      |
| Media Queries | 1hr      |  
| Flexbox Implimentation      | 3hr | 
| Total      | 35hr      |    



### Code Snippet:

While this JavaScript if else and else if statement is simple, it controls main logic of the application. 
There are four possible conditions that can be met.

```javascript
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
```