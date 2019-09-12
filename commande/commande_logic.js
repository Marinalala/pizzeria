$(document).ready(function() {
  let pizzasJSON = localStorage.getItem("pizzas");
  if (!pizzasJSON) {
    return;
  }
  let pizzas = JSON.parse(pizzasJSON); // Transforme le json en tableau JS

  let prixTotal = 0;

  for (let i = 0; i < pizzas.length; i++) {
    let pizza = pizzas[i];
    let col_nom = $("#commande .pizz1");
    let col_taille = $("#commande .taille1");
    let col_quantite = $("#commande .quantite1");
    let col_prix = $("#commande .total1");

    let prix = 6;
    switch (pizza.taille) {
      case "S":
        prix = 6;
        break;
      case "M":
        prix = 9;
        break;
      case "L":
        prix = 12;
        break;
      case "XL":
        prix = 15;
        break;
      default:
        prix = 15;
        break;
    }

    if (prix && pizza.nb_pizza) {
      prixTotal += prix * pizza.nb_pizza;
    }

    col_nom.append("<p>" + pizza.nom + "</p>");

    col_taille.append("<p>" + pizza.taille + "</p>");

    col_quantite.append("<p>" + pizza.nb_pizza + "</p>");

    col_prix.append("<p>" + prix * pizza.nb_pizza + "€</p>");
  }

  let col_total = $(".total2");
  col_total.append("<p>" + prixTotal + "€</p>");
});
