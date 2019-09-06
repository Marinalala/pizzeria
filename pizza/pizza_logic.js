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