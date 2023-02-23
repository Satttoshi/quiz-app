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

const form = document.querySelector(`[data-js="form"]`);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  form.reset();
  form["1"].focus();
});

function addQuestion(data) {}

const newCard = document.createElement("section");
newCard.classList.add("card");

newCard.innerHTML = `
<svg
data-js="bookmark"
class="card__bookmark"
aria-label="bookmarked"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width="64px"
heigth="64px"
>
<path
  d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
/>
</svg>

<p class="card__question">
How many holes in a polo? I did count it, and it's definitely not
four!
</p>
<!-- Button component start -->
<button
type="button"
class="answer"
data-showanswer="false"
data-js="answer"
>
Show Answer
</button>
<!-- Button component end -->
<span class="card__tags">
<p class="tag">#html</p>
<p class="tag">#flexbox</p>
<p class="tag">#css</p>
</span>
`;

const main = document.querySelector("main");
main.append(newCard);

/* 
<section class="card">
<svg
  data-js="bookmark"
  class="card__bookmark"
  aria-label="bookmarked"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="64px"
  heigth="64px"
>
  <path
    d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
  />
</svg>

<p class="card__question">
  How many holes in a polo? I did count it, and it's definitely not
  four!
</p>
<!-- Button component start -->
<button
  type="button"
  class="answer"
  data-showanswer="false"
  data-js="answer"
>
  Show Answer
</button>
<!-- Button component end -->
<span class="card__tags">
  <p class="tag">#html</p>
  <p class="tag">#flexbox</p>
  <p class="tag">#css</p>
</span>
</section> */

// console.log(form["1"]);
