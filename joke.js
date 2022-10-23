//button and paragraph tag 
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");

//Change the words(strings) on the text box 
//Each the text box is click the words will change
const buttonText = [
  "Ugh.",
  "🔥",
  "👧🏿",
  "So Funny.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

//fetch the joke/API
async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
        headers: {
//Accept header tells the api that it is expecting the response          
          Accept: "application/json",
        },
      });
 //input and parsing it to produce a JavaScript object.
 // interface takes a Response stream and reads it to completion.
      const data = response.json();
      return data;
}
//Joke will populate and change  
async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    //button text never stays the same
    jokeButton.textContent = randomItemFromArray(
      buttonText,
      jokeButton.textContent
    );
  }

//Generates a random text item from the text buttom
  function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    //Stop same text will not be selected twice
    if (item == not) {
        console.log("Ah! try another!");
        return randomItemFromArray(arr, not);
      }

    return item;

  }


//event listener that fires when a user clicks a button
  jokeButton.addEventListener("click", handleClick);