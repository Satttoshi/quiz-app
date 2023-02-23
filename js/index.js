console.clear();

// Bookmark Toggler
const bookmark = document.querySelector(`[data-js="bookmark"]`);

bookmark.addEventListener("click", (event) => {
  event.target.classList.toggle("card__bookmark--select");
});

// Answer Button Toggler
const answerButton = document.querySelector(`[data-js="answer"]`);

answerButton.addEventListener("click", (event) => {
  // console.dir(event.target);
  const hiddenLabel = "Show Answer";
  const answer = "How should I know? LOL";

  if (event.target.dataset.showanswer === "false") {
    event.target.setAttribute("data-showanswer", "true");
    event.target.textContent = answer;
  } else {
    event.target.setAttribute("data-showanswer", "false");
    event.target.textContent = hiddenLabel;
  }
});
