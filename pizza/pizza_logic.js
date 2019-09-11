    // Exécute à la fin du chargement de la page
$( document ).ready(affichePizza());


    // Afficher la liste des pizzas
function affichePizza() {

   $.ajax({
       url: "http://localhost/pizzeria/liste_pizza.php",
       type: 'GET',
       success: function success(result) {
           result = JSON.parse(result);
           for (var i = 0; i < result.length; i++) {
               $(".liste").append(`
               <div class="pizza">
            <div class="titre_pizza"><span>` 
            // Nom pizza
            + result[i].nom +`
            </span></div>
            <div class="img_pizza"><u><img src="` 
            // Image pizza
            + result[i].image +`"></u>
            </div>
            <div class="description_pizza"><span>` 
            // Description pizza
            + result[i].description +`</span>
            </div>
            <div class="taille">
                <span>S</span><input type="radio" name="taille_`+result[i].id+`" value="S">
                <span>M</span><input type="radio" name="taille_`+result[i].id+`" value="M">
                <span>L</span><input type="radio" name="taille_`+result[i].id+`" value="L">
                <span>XL</span><input type="radio" name="taille_`+result[i].id+`" value="XL">
            </div>
            <div class="nb_pizza">
                <span>Nombre de pizza : </span>
                <select class="nom_pizza">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
            </div>
            <div>
                <button class="ajouter" onclick="ajoutPizza(`+result[i].id+`)">Ajouter</button>
            </div>
        </div>
               `);
           }
       },

       error: function error(erreur) {
           console.log(erreur);
       },
   });

}

        // Ajoute la pizza commandé
function ajoutPizza(idPizza) {    
   var taille = $('[name="taille"]:checked').val();
   var nb_pizza = $('option:selected').val();
   alert(taille);
   alert(nb_pizza);
}