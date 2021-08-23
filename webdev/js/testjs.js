function checkForm(el) {

  var name = document.getElementById('contact-name').value;
  var email = document.getElementById('contact-email').value;
  var message = document.getElementById('contact-message').value;

  var fail = "";

  if(name == "" || email == "" || message == "")
    fail = "Заполните все поля";
  else if(name.length < 2 || name.length > 20)
    fail = "Введите корректное имя, содержащее больше 1 символа";
  else if(name.split("$").length > 1)
    fail = "Введите корректное имя, без символа $"
    else if(message.length < 30)
      fail = "Введите сообщение, содержащее больше 20 символов";

  if(fail != "") {
    document.getElementById('error').innerHTML = fail;
    return false;
  } else {
    alert("Отправлено");
    return true;
  }
}
