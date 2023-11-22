import contactImage from './contact-image.png';

export default function contact() {
  const mainEl = document.querySelector('.main');

  const contactEl = document.createElement('section');
  contactEl.classList.add('contact');

  // Add restaurant image
  const imageEl = new Image();
  imageEl.src = contactImage;
  contactEl.appendChild(imageEl);

  // Add restaurant title
  const titleEl = document.createElement('h2');
  titleEl.textContent = 'Contacts';
  titleEl.classList.add('title');
  contactEl.appendChild(titleEl);

  // Add contact links wrapper
  const contactsWrapper = document.createElement('div');
  contactsWrapper.classList.add('contact__links');
  contactEl.appendChild(contactsWrapper);

  // Add phone number
  const phoneNumberEl = document.createElement('a');
  phoneNumberEl.href = 'tel:375291234567';
  phoneNumberEl.textContent = 'Phone number: +375(29)1234567';
  contactsWrapper.appendChild(phoneNumberEl);

  // Add address
  const addressEl = document.createElement('a');
  addressEl.href = 'https://maps.app.goo.gl/dnR1GiX3ouf1Bidt9';
  addressEl.textContent = 'Adress: проспект Дзержинского 57, Минск 220089';
  contactsWrapper.appendChild(addressEl);

  mainEl.appendChild(contactEl);
}
