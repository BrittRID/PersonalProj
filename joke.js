const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");
const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];
async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
 
      const data = response.json();
      return data;
}
 
async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(
      buttonText,
      jokeButton.textContent
    );
  }

  function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item == not) {
        console.log("Ah! we used that one last time, look again");
        return randomItemFromArray(arr, not);
      }

    return item;

  }



  jokeButton.addEventListener("click", handleClick);