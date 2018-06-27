
var characters = ["Captain America", "Iron Man", "Hawkeye", "Spiderman", "Scarlet Witch", "Star Lord", "Thanos", "Ant-Man", "Thor", "Rocket Raccoon"];

var status = "still";

function displayCharacter() {
    var character = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + character;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            if (status == "moving") {
            var stillImageUrl = response.data.fixed_height_small_still_url;
            var characterImage = $("<img>");
            characterImage.attr("src", stillImageUrl);
            $("#character-gifs").html(characterImage);
            status = "still"
            console.log(response)
            }
        });
        if (status == "still") {
            ("#character-gifs").on("click", function (){
                console.log(true)
                var movingImageUrl = response.data.embeded_url;
                var characterImage = $("<img>");
                characterImage.attr("src", movingImageUrl);
                $("#character-gifs").html(characterImage);
                status = "moving"
            })
        }
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

