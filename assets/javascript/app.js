// api key 7L0PmCx2IKcIhRD13KkcEZRYTcvtqefl
var rmArray = ["Summer Smith", "Morty Smith", "Rick Sanchez", "Jerry Smith", "Beth Smith"];

$(document).ready(function() {
    for (var i = 0; i < rmArray.length; i++) {
        $("#quote-buttons").append("<button type='button' onclick='searchGif(\"" + rmArray[i] + "\")' class='btn btn-primary' value=' " + rmArray[i] + "'> " + rmArray[i] + " </button>");
    }
});
// ////////////////////////////////////////////////////////////
function quoteButtonClicked() {
    var userInput = $('#quote-input ').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#quote-input').val();

    if (userInput) {
        $('#quote-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}
function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + " rick and morty"+ ' &api_key=7L0PmCx2IKcIhRD13KkcEZRYTcvtqefl&limit=9',
            type: 'GET',
        })
        .done(function(response) {
        displayGif(response);
        })
}

function displayGif(response) {
    $('#quote').empty();
    console.log(response)
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#quote').append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}
