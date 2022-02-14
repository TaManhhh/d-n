function getValue(id) {
  return document.getElementById(id).value.trim();
}

// Hiển thị lỗi
function showError(key, mess) {
  document.getElementById(key + '_error').innerHTML = mess;
}
function validate(e) {
  var flag = true;
  var password = getValue('password');
  var repassword = getValue('repassword');
  if (password == '' || password.length < 8 || password != repassword) {
    flag = false;
    showError('password', 'Vui lòng kiểm tra lại Password');
  }

  if (!flag) {
    // alert(1);
    e.preventDefault();
  }
  else{
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      users = [];
    }
    console.log(users);
    // này là bước submit form
    let objectUser = {
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      repassword: document.getElementById("repassword"),
      name: document.getElementById("ten"),
      birth: document.getElementById("birth"),
      phone: document.getElementById("phone"),
    }
    users.push(objectUser);
    let stringTemp = JSON.stringify(users);
    console.log(stringTemp);
    localStorage.setItem("users", stringTemp)
    console.log(localStorage);
    // alert(123);
  }
}