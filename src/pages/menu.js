import pancakesImage from "../assets/pancakes-berries.jpg";
import eggsImage from "../assets/scrambled-eggs.jpg";
import avocadoImage from "../assets/avocado toast.jpg";
import frenchToastImage from "../assets/french toast.jpg";
import coffeeImage from "../assets/cozy cafe interior.jpg";
const menuItems = [
  {
    name: "Pancakes with Berries",
    description: "Fluffy buttermilk pancakes topped with fresh strawberries, blueberries, and maple syrup",
    price: 12,
    image: pancakesImage,
  },
  {
    name: "Scrambled Eggs",
    description: "Fluffy scrambled eggs with fresh chives, served with a side of buttered toast",
    price: 9,
    image: eggsImage,
  },
  {
    name: "Avocado Toast",
    description: "Smashed avocado on toasted sourdough, cherry tomatoes, chili flakes, and sesame",
    price: 11,
    image: avocadoImage,
  },
  {
    name: "French Toast",
    description: "Golden French toast with cinnamon, powdered sugar, and mixed berries",
    price: 11,
    image: frenchToastImage,
  },
  {
    name: "Coffee",
    description: "Freshly brewed coffee, espresso or latte made with locally roasted beans",
    price: 4,
    image: coffeeImage,
  },
];

function createMenuCard(item) {
  return `
    <li class="menu-card">
      <img src="${item.image}" alt="${item.name}" />
      <h2>${item.name}</h2>
      <div class="menu-card-bottom">
        <p>${item.description}</p>
        <span class="menu-price">$${item.price}</span>
      </div>
    </li>
  `;
}

function menuPage() {
  const page = document.createElement("main");
  page.className = "menu";

  page.innerHTML = `
    <h1>Menu  Breakfast All Day</h1>
    <p class="menu-intro">
      Fresh, homemade breakfast made with local ingredients.
      Order your favorites any time from 7am to 2pm.
    </p>

    <ul class="menu-grid">
      ${menuItems.map(createMenuCard).join("")}
    </ul>
  `;

  return page;
}

export default menuPage;