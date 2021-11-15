// let y = document.addEventListener('DOMContentLoaded', () => {
//   let x = personName.value;
//   console.log(x);
// });
// let userInfoArr = [personName.value, dob.value, userId.value, password.value];
// let = [line1, line2, landmark];
// userArr = [userInfoArr, userAddArr];
const name = document.getElementById('name');
const fullName = name.value.trim();

let form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const dob = document.getElementById('date-of-birth').value.trim();
  const userId = document.getElementById('user-name').value.trim();
  const password = document.getElementById('password').value.trim();
  const cPassword = document.getElementById('confirm-password').value.trim();
  nameValidation();
});

let errorSpan = document.getElementById('error-span');
let message;

// name.addEventListener('change', function () {
//   nameValidation();
//   return;
// });
fullName.onChange = function () {
  nameValidation();
};
function nameValidation(message) {
  console.log(fullName);
  if (fullName.length <= 5) {
    message = '*too short !';
    errorSpan.innerText = message;
  } else {
    fullName.style.color = 'green';
  }
}
nameValidation();
