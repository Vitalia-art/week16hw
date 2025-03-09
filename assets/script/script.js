const form = document.getElementById('registration-form');
const submitButton = document.getElementById('submit-button');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const ageField = document.getElementById('age');
const genderFields = document.getElementsByName('gender');
const professionField = document.getElementById('profession');
const passwordField = document.getElementById('password');
const termsField = document.getElementById('terms');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const ageError = document.getElementById('age-error');
const genderError = document.getElementById('gender-error');
const professionError = document.getElementById('profession-error');
const passwordError = document.getElementById('password-error');
const termsError = document.getElementById('terms-error');

const validateForm = () => {
  let isValid = true;

  const name = nameField.value.trim();
  if (!name.match(/^[a-zA-Zа-яА-Я\s]+$/) || name.length < 2 || name.length > 20) {
    nameError.textContent = "Имя должно содержать только буквы и пробелы, от 2 до 20 символов.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const email = emailField.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Введите корректный email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  const age = ageField.value.trim();
  if (!age || age < 18 || age > 100) {
    ageError.textContent = "Возраст должен быть от 18 до 100 лет.";
    isValid = false;
  } else {
    ageError.textContent = "";
  }

  if (![...genderFields].some(field => field.checked)) {
    genderError.textContent = "Выберите ваш пол.";
    isValid = false;
  } else {
    genderError.textContent = "";
  }

  if (!professionField.value) {
    professionError.textContent = "Выберите вашу профессию.";
    isValid = false;
  } else {
    professionError.textContent= "";
}

const password = passwordField.value.trim();
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
if (!passwordPattern.test(password)) {
  passwordError.textContent = "Пароль должен содержать минимум 8 символов, включая заглавную букву, строчную и цифру.";
  isValid = false;
} else {
  passwordError.textContent = "";
} 

if (!termsField.checked) {
    termsError.textContent = "Необходимо согласие с обработкой данных.";
    isValid = false;
  } else {
    termsError.textContent = "";
  }

  submitButton.disabled = !isValid;

  return isValid;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Форма отправлена:");
      console.log("Имя:", nameField.value);
      console.log("Email:", emailField.value);
      console.log("Возраст:", ageField.value);
      console.log("Пол:", document.querySelector('input[name="gender"]:checked').value);
      console.log("Профессия:", professionField.value);
      console.log("Пароль:", passwordField.value);
      form.reset(); 
      submitButton.disabled = true;
    }
  });
  
  [nameField, emailField, ageField, professionField, passwordField, termsField].forEach(field => {
    field.addEventListener('focus', () => validateForm());
    field.addEventListener('blur', () => validateForm());
  });

  validateForm();