function recupDesDonnees() {
  $.ajax({
    url: "http://localhost/pizzeria/inscription.php",
    type: "POST",
    data: {
      name: $("#name").val(),
      fname: $("#fname").val(),
      email: $("#email").val(),
      adress: $("#adress").val(),
      phone: $("#phone").val(),
      pass: $("#pass").val()
    },
    success: function success(result) {
      let data = JSON.parse(result);

      if (data.message) {
        alert(data.message);
      }

      if (data.redirect) {
        // Changement de page si connecté
        document.location.href = data.redirect;
      }
    },
    error: function error(error) {}
  });
}
