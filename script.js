
var characters = ["Captain America", "Iron Man", "Hawkeye", "Spiderman", "Scarlet Witch", "Star Lord", "Thanos", "Ant-Man", "Thor", "Rocket Raccoon"];

function displayCharacter() {
    var character = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + character;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var stillImageUrl = response.data.fixed_height_small_still_url;
            var characterImage = $("<img>");
            characterImage.attr("src", stillImageUrl);
            $("#character-gifs").html(characterImage);
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
    var characterNew = $("#character-input").val();
    if(!characterNew) {
        return
      }
    characters.push(characterNew);
    renderButtons();
});

$(document).on("click", ".character-btn", displayCharacter);
renderButtons();

