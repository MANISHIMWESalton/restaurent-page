import pancakesImage from "../assets/pancakes-berries.jpg"
import { clockIcon, starIcon } from "../icons.js";

function homePage() {
  const page = document.createElement("main");
  page.className = "home";
  page.innerHTML = `
    <img class="home-photo" src="${pancakesImage}"
         alt="Stack of pancakes with fresh berries and maple syrup" />

    <div class="home-text">
      <h1>Warm, Cozy, Delicious Every Morning</h1>
      <p>
        At Morning Hive Bar, we believe breakfast is more than a meal.
        It's a warm hug to start your day. From fluffy pancakes and fresh
        pastries to savory breakfast bowls made with local ingredients, every
        dish is made with care. Come in, take a seat, and enjoy good food in
        good company.
      </p>

      <ul class="home-highlights">
        <li>
          <span class="icon">${clockIcon}</span>
          Open Daily · 7:00am – 2:00pm
        </li>
        <li>
          <span class="icon">${starIcon}</span>
          Loved for our cozy atmosphere, fresh ingredients, and friendly service
        </li>
      </ul>
    </div>
  `;
  return page;
}

export default homePage;