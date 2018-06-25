
var characters = ["Captain America", "Iron Man", "Hawkeye", "Spiderman", "Scarlet Witch", "Star Lord", "Thanos", "Ant-Man", "Thor", "Rocket Raccoon"];

$(document).on("click", "#buttons", displayCharacter);


function displayCharacter() {

    var character = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + character;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var imageUrl = response.data.image_original_url;
            var characterImage = $("<img>");
            characterImage.attr("src", imageUrl);
            $("#character-gifs").html(characterImage);
        });
        console.log(queryURL)
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

$("#character-gifs").on("click", function() {
    var state = $(this).attr("data-state");
    if (state == "still"){
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    if (state == "animate") {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");

    }
  });
renderButtons();
