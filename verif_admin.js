
function affichePizza() {

    $.ajax({
        url: "http://localhost/pizzeria/connexion.php",
        type: 'GET',
        success: function success(result) {
            result = JSON.parse(result);
            if ( i == 0) {
                $("#liste").hide();
            }
        },

        error: function error(erreur) {
            console.log(erreur);
        },
    });

}
