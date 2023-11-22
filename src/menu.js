import menuImage from './menu-image.jpg';

export default function menu() {
  const mainEl = document.querySelector('.main');

  const menuEl = document.createElement('section');
  menuEl.classList.add('menu');

  // Add menu image
  const imageEl = new Image();
  imageEl.src = menuImage;
  menuEl.appendChild(imageEl);

  // Add menu title
  const titleEl = document.createElement('h2');
  titleEl.textContent = 'Poseidon Restaurant Menu';
  titleEl.classList.add('title');
  menuEl.appendChild(titleEl);

  // Add menu description
  const descriptionEl = document.createElement('p');
  descriptionEl.textContent =
    "Try something from our menu and you won't leave hungry!";
  descriptionEl.classList.add('description');
  menuEl.appendChild(descriptionEl);

  mainEl.appendChild(menuEl);
}
