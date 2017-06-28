$(document).ready(function() {
  $('#pokedex-form').submit(function(event) {
    event.preventDefault();
    var pokemonId = $('#pokemon-id').val();
    $.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId + '/')
    .then(function(response) {
      console.log(response);
      $('#name').text(response.name);
      $('#image-container').empty();
      $('#image-container').append('<img src="' + response.sprites.front_default + '" alt="your pokemon">');
      $('#types').empty();
      for (i = 0; i < response.types.length; i++) {
        $('#types').append("<li>" + response.types[i].type.name + "</li>");
      }
      $('#abilities').empty();
      for (i = 0; i < response.abilities.length; i++) {
        $('#abilities').append("<li>" + response.abilities[i].ability.name + "</li>");
      }
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
    $('#pokemon-id').val("");
  });
  $('.numbered-button').click(function() {
    var buttonValue = $(this).val();
    $('#pokemon-id').val($('#pokemon-id').val() + buttonValue);
  });
});
