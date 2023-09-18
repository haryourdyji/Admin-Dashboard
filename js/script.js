function myfunc(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const country = document.getElementById("country").value;
  let gender = document.getElementById("gender");

  gender.checked ? (gender = "Male") : (gender = "Female");

  localStorage.setItem("ls_firstName", firstName);
  localStorage.setItem("ls_lastName", lastName);
  localStorage.setItem("ls_userName", userName);
  localStorage.setItem("ls_email", email);
  localStorage.setItem("ls_password", password);
  localStorage.setItem("ls_phone", phone);
  localStorage.setItem("ls_country", country);
  localStorage.setItem("ls_gender", gender);
}
