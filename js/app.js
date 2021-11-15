const btn = document.querySelector('#btn');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const userLocation = document.querySelector('#street');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const photo = document.querySelector('#photo');

const URL = 'https://randomuser.me/api';

const getUser = async () => {
  const res = await fetch(URL);
  const json = await res.json();
  const userData = json.results[0];
  console.log(userData);
  const user = {
    name: userData.name.first,
    lastName: userData.name.last,
    location: userData.location.street,
    phone: userData.phone,
    email: userData.email,
    photo: userData.picture.large,
  };
  console.log(user);

  firstName.textContent = user.name;
  lastName.textContent = user.lastName;
  userLocation.textContent = `${user.location.name}, ${user.location.number}`;
  phone.textContent = user.phone;
  email.textContent = user.email;
  photo.src = user.photo;
};

btn.addEventListener('click', getUser);
