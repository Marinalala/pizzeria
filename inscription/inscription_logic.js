function recupDesDonnees() {
  $.ajax({
    url: "http://localhost/pizzeria/pizzeria_php/inscription.php",
    type: "POST",
    data: {
      nom: $("#name").val(),
      fname: $("#fname").val(),
      email: $("#email").val(),
      adresse: $("#adress").val(),
      telephone: $("#phone").val(),
      password: $("#pass").val()
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
