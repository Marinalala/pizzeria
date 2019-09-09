function recupDesDonnees() {
  $.ajax({
    url: "http://localhost/pizzeria/connexion.php",
    type: "POST",
    data: {
      email: $("#email").val(),
      password: $("#password").val()
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
