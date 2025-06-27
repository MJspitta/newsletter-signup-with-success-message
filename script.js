const subForm = document.querySelector('.subscribe-form');
const emailAddress = document.getElementById('email');
const mainContainer = document.querySelector('.container');
const successContainer = document.querySelector('.success-container');
const dismissMessage = document.getElementById('dismiss-message');

subForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateEmail(emailAddress.value.trim())) {
    // console.log('invalid email');
    document.querySelector('.error').style.display = 'block';
    emailAddress.classList.add('error-input');
  } else {
    // console.log('valid email');
    document.querySelector('.error').style.display = 'none';
    emailAddress.classList.remove('error-input');
    document.querySelector('.success-email').textContent = emailAddress.value.trim();
    mainContainer.style.setProperty('display', 'none');
    successContainer.style.setProperty('display', 'flex');
  }
});

dismissMessage.addEventListener('click', () => {
  subForm.reset();
  mainContainer.style.removeProperty('display');
  successContainer.style.removeProperty('display');
});

const validateEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};