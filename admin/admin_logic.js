function ajoutPizza () {

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
         success: function success (result) {
             alert("Pizza ajouté");
         },
         error: function error (erreur) {
             console.log("erreur");
         }
     });          
    
}


function liste_pizza () {
    
}