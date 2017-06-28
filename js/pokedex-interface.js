$(document).ready(function() {
  $('#pokedex-form').submit(function(event) {
    event.preventDefault();
    var pokemonId = $('#pokemon-id').val();
    $.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId + '/')
    .then(function(response) {
      console.log(response);
      // $('.display').append('<h1>' + response.name + '</h1>');
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
