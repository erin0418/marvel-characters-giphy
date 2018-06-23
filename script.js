
var characters = ["Captain America", "Iron Man", "Hawkeye", "Spiderman", "Scarlet Witch", "Star Lord", "Thanos", "Ant-Man", "Thor", "Rocket Raccoon"];

function displayCharacter() {

    var character = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + character;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            console.log(response);
        });

      }

function renderButtons() {

    $("#buttons").empty();

    for (var i = 0; i < characters.length; i++) {

    var a = $("<button>");

    a.addClass("character-btn");
         
    a.attr("data-name", characters[i]);

    a.text(characters[i]);

    $("#buttons").append(a);
    }
}

$("#add-character").on("click", function(event) {
    event.preventDefault();
    var character = $("#character-input").val().trim();

    characters.push(character);

    renderButtons();
});

$(document).on("click", ".movie-btn", displayCharacter);

renderButtons();