// Exécute à la fin du chargement de la page
$(document).ready(affichePizza());


// Afficher la liste des pizzas
function affichePizza() {
  $.ajax({
    url: "http://localhost/pizzeria/liste_pizza.php",
    type: "GET",
    success: function success(result) {
      pizzas = JSON.parse(result);
      for (var i = 0; i < pizzas.length; i++) {
        $(".liste").append(
          `
               <div class="pizza">
            <div class="titre_pizza"><span>` +
            // Nom pizza
            pizzas[i].nom +
            `
            </span></div>
            <div class="img_pizza"><u><img src="` +
            // Image pizza
            pizzas[i].image +
            `"></u>
            </div>
            <div class="taille">
                <span>S</span><input type="radio" name="taille_` +
            pizzas[i].id +
            `" value="S">
                <span>M</span><input type="radio" name="taille_` +
            pizzas[i].id +
            `" value="M">
                <span>L</span><input type="radio" name="taille_` +
            pizzas[i].id +
            `" value="L">
                <span>XL</span><input type="radio" name="taille_` +
            pizzas[i].id +
            `" value="XL">

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

                <button class="ajouter" onclick="ajoutPizza(` +
            pizzas[i].id +
            `, '` +
            pizzas[i].nom +
            `')">Ajouter</button>
            </div>
        </div>
               `
        );
      }
    },
    error: function error(erreur) {
      console.log(erreur);
    }
  });
}

let cmdPizzas = [];


// Ajoute la pizza commandé
function ajoutPizza(idPizza, nomPizza) {
  if (!idPizza && !nomPizza) {
    return;
  }

  var taille = $('[name="taille_' + idPizza + '"]:checked').val();
  var nb_pizza = $("option:selected").val();

  if (!taille && !nb_pizza) {
    alert("Erreur sur les données.");
    return;
  }

  // On créer un objet pizza
  var newPizza = {
    id: idPizza,
    nom: nomPizza,
    taille: taille,
    nb_pizza: nb_pizza
  };

  // ON pousse / ajoute l'objet au tableau global
  cmdPizzas.push(newPizza);

  // On prepare le JSON pour le stockage dans le localStorage
  let json = JSON.stringify(cmdPizzas); // Moulinette du JSON
  // On insert dans le localStorage
  localStorage.setItem("pizzas", json); // F12 -> Application -> localstorage
}

