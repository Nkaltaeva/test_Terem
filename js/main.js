// Скрыть и показать 1 блок
$(".wrap-3-1").click(function () {
  $(".wrap-1").fadeToggle(100);
});

// Поменять местами 1 и 2 блок
$(".wrap-3-2").click(function () {
  $(".wrap > a").each(function () {
    if ($(this).next()) {
      el = $(this).next();
    } else {
      el = $(this).prev();
    }

    var copy_from = $(this).clone(true);
    $(el).replaceWith(copy_from);

    var copy_to = $(el).clone(true);
    $(this).replaceWith(copy_to);
  });

  return false;
});

// Модальное окно
var delay_popup = 1000;
setTimeout(
  "document.getElementById('window-modal').style.display='block'",
  delay_popup
);
