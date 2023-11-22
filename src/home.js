import homeImage from './home-image.jpg';

export default function home() {
  const mainEl = document.querySelector('.main');

  const homeEl = document.createElement('section');
  homeEl.classList.add('home');

  // Add restaurant image
  const imageEl = new Image();
  imageEl.src = homeImage;
  homeEl.appendChild(imageEl);

  // Add restaurant title
  const titleEl = document.createElement('h1');
  titleEl.textContent = 'Poseidon Restaurant';
  titleEl.classList.add('title');
  homeEl.appendChild(titleEl);

  // Add restaurant description
  const descriptionEl = document.createElement('p');
  descriptionEl.textContent =
    'Poseidon specializes in delicious food featuring fresh ingredients and masterful preparation by the Poseidon culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, Poseidon’s lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.';
  descriptionEl.classList.add('description');
  homeEl.appendChild(descriptionEl);

  mainEl.appendChild(homeEl);
}
