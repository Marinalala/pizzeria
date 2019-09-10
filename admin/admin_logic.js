$(document).ready(affichePizza());

function ajoutPizza() {

    var nom = $(".ajout_nom_pizza").val();
    var image = $(".ajout_image_pizza").val();
    var description = $(".ajout_description_pizza").val();


    $.ajax({
        url: "http://localhost/PIZZERIA/pizzeria/pizzeria_php/admin_server.php",
        type: "POST",
        data: {
            nom: nom,
            image: image,
            description: description,
        },
        success: function success(result) {
            alert("Pizza ajouté");
        },
        error: function error(erreur) {
            console.log("erreur");
        }
    });

}


function affichePizza() {

    /*$.ajax({
        url: "http://localhost/pizzeria/admin_server.php",
        type: 'GET',
        success: function success(result) {
            result = JSON.parse(result);
            for (var i = 0; i < result.length; i++) {
                $(".liste").append(`
         <div class="liste_pizza">
            <input type="text" class="liste_nom_pizza" value="` 
            // Nom pizza
            + result[i].nom +`">
        <div class="row_description">
            <div>
                <input type="text" class="liste_url_pizza" value="`
                //url image pizza
                + result[i].image + `">
                <input type="text" class="liste_description_pizza" value="`
                //description pizza
                + result[i].description + `">
            </div>
            //
             <img src="`
             //photo pizza
                + result[i].image + `" class="liste_image_pizza">
        </div>
     </div>`);
            }
        },

        error: function error(erreur) {
            console.log(erreur);
        },
    });*/

}