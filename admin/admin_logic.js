$(document).ready(affichePizza());

function ajoutPizza() {

    var nom = $(".ajout_nom_pizza").val();
    var image = $(".ajout_image_pizza").val();
    var description = $(".ajout_description_pizza").val();


    $.ajax({
        url: "http://localhost/pizzeria/admin_server.php",
        type: "POST",
        data: {
            nom: nom,
            image: image,
            description: description,
        },
        success: function success(result) {
            alert("Pizza ajouté");
            reload();
        },
        error: function error(erreur) {
            console.log("erreur");
        }
    });

}


function affichePizza() {

    $.ajax({
        url: "http://localhost/pizzeria/liste_pizza.php",
        type: 'GET',
        success: function success(result) {
            result = JSON.parse(result);
            for (var i = 0; i < result.length; i++) {
                $(".liste").append(`
                <div class="liste_pizza">
                    <input type="text" class="liste_nom_pizza" value="`
                    + result[i].nom +
                    `">
                    <div class="row_description">
                        <div>
                            <input type="text" class="liste_url_pizza" value="`
                            + result[i].image +
                            `">
                            <input type="text" class="liste_description_pizza" value="`
                            + result[i].description +
                            `">
                        </div>
                        <img src="`
                        + result[i].image +
                        `" class="liste_image_pizza">
                    </div>
                    <div>
                        <button class="modifier" onclick="modifier(` + result[i].nom + ", " + result[i].image + ", " + result[i].description + `)">Modifier</button>
                        <button class="supprimer" value="`+ result[i].id + `"onclick="supprimer(`+result[i].id+`)">Supprimer</button>
                    </div>
                </div>
                `    
                );
           }
       },

       error: function error(erreur) {
           console.log(erreur);
       },
   });

}

function supprimer(id){

    $.ajax({
        url: "http://localhost/pizzeria/delete_pizza.php",
        type: "POST",
        data: {
            id: id,
        },
        success: function success(result) {
            alert("Pizza supprimé");
            reload();
        },
        
        error: function error(erreur) {
            console.log("erreur");
        }
    });
}

function modifier(nom, image, description) {
    alert(nom);
}


function reload(){
    window.location.reload();
}