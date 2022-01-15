//Validtion Code For Inputs
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "12345") {
    alert("Login Succesfully");
    return false;
  } else {
    alert("Login Failed");
  }
  if (username == "Kiran" && password == "save") {
    alert("Login Succesfully");
    return false;
  } else {
    alert("Login Failed");
  }
}
