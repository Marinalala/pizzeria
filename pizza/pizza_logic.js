$( document ).ready(affichePizza());


function affichePizza() {

   $.ajax({
       url: "http://localhost/pizzeria/admin_server.php",
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
            <div class="img_pizza"><u>` 
            // Nom pizza
            + result[i].image +`</u>
            </div>
            <div class="taille">
                <span>S</span><input type="radio" name="taille" value="S">
                <span>M</span><input type="radio" name="taille" value="M">
                <span>L</span><input type="radio" name="taille" value="L">
                <span>XL</span><input type="radio" name="taille" value="XL">
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
                <button class="ajouter" onclick="ajoutPizza()">Ajouter</button>
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

function ajoutPizza() {    
   var taille = $('[name="taille"]:checked').val();
   var nb_pizza = $('option:selected').val();
   alert(taille);
   alert(nb_pizza);

//    $("select.nom_pizza").change(function(){
//     var nombre_pizza = $(this).children("option:selected").val();
//     alert(nombre_pizza);
// });
}