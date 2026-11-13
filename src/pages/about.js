import coffeeImage from "../assets/cozy cafe interior.jpg";
import { pinIcon, clockIcon, phoneIcon, mailIcon } from "../icons.js";

const contactDetails = [
  {
    icon: pinIcon,
    title: "Address",
    text: "123 Mbale Street · Downtown Cafe District · Open Daily",
  },
  {
    icon: clockIcon,
    title: "Hours",
    text: "Monday – Sunday · 7:00am – 2:00pm",
  },
  {
    icon: phoneIcon,
    title: "Phone",
    text: "(+250) 787-312593",
    link: "tel:+250787312593",
  },
  {
    icon: mailIcon,
    title: "Email",
    text: "hellen@bearysbreakfastbar.com",
    link: "mailto:hellen@bearysbreakfastbar.com",
  },
];

function createContactCard(detail) {
  const text = detail.link
    ? `<a href="${detail.link}">${detail.text}</a>`
    : detail.text;

  return `
    <li class="contact-card">
      <span class="icon">${detail.icon}</span>
      <div>
        <h3>${detail.title}</h3>
        <p>${text}</p>
      </div>
    </li>
  `;
}

function aboutPage() {
  const page = document.createElement("main");
  page.className = "about";

  page.innerHTML = `
    <h1>About &amp; Contact</h1>

    <div class="about-columns">
      <!-- Left: our story -->
      <article class="about-story">
        <img src="${coffeeImage}" alt="Inside the cafe: wooden tables, warm lights and a pastry counter" />
        <h2>Our Story</h2>
        <p>
          Morning Hive Bar began as a small family dream: a welcoming spot
          where mornings feel warm and comforting. Inspired by cozy cabin
          mornings and homestyle cooking, we serve made-from-scratch breakfast
          with fresh local ingredients and lots of love.
        </p>
        <p>
          Thank you for being part of our little corner of the community.
          We're here to serve delicious food, warm smiles, and cozy moments
          every day.
        </p>
      </article>

      <!-- Right: contact info -->
      <section class="about-contact">
        <h2>Contact Info</h2>
        <ul class="contact-list">
          ${contactDetails.map(createContactCard).join("")}
        </ul>
        <p class="contact-note">
          We love hearing from you! For catering or private events, email us anytime.
        </p>
      </section>
    </div>
  `;

  return page;
}

export default aboutPage;