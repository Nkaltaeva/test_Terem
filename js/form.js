//Формирование данных из формы
$(document).ready(function () {
  const form = $(".form > form");
  form.submit(FormDataSend);
});

function FormDataSend(form) {
  const data = $(".form > form");
  const contentSpan = $("#listForm > .contentData .console span");

  contentSpan.text(JSON.stringify(data.serializeArray()));

  ServiceCall(data.attr("method"));

  var str = "Данные отправлены";
  alert(str);

  return false;
}

// Выведение данныз из формы
function FormData(data) {
  return data.serialize();
}

function ServiceCall(method) {
  const contentData = $("#listForm > .content:nth-child(1)  h3");
  $.ajax({
    type: method,
  });
}
