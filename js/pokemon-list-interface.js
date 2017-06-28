var pokemonList = require('./../js/pokedex.js').pokemonList;

$(document).ready(function() {
  for (i = 0; i < pokemonList.length; i++) {
    if (i <= 720 ) {
      $('.pokemonList').append("<li>" + pokemonList[i] + "</li>");
    }
  }
});
