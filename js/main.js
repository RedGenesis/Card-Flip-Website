$(document).ready(function(){
    // Flips individual card over on click
    $("#ten").click(function(){
        $(this).attr("src", "images/spades_10.png");
    });

    $("#jack").click(function(){
        $(this).attr("src", "images/spades_jack.png");
    });

    $("#queen").click(function(){
        $(this).attr("src", "images/spades_queen.png");
    });

    $("#king").click(function(){
        $(this).attr("src", "images/spades_king.png");
    });

    $("#ace").click(function(){
        $(this).attr("src", "images/spades_ace.png");
    });

    $("#joker").click(function(){
        $(this).attr("src", "images/joker_black.png");
    });

    // Flips all cards face down when button is pressed
    $("#firstButton").click(function(){
        $("img").attr("src", "images/card back fancy.jpg");
    });

    // Flips all card face up when button is pressed
    $("#secondButton").click(function(){
        $("#ten").attr("src", "images/spades_10.png");
        $("#jack").attr("src", "images/spades_jack.png");
        $("#queen").attr("src", "images/spades_queen.png");
        $("#king").attr("src", "images/spades_king.png");
        $("#ace").attr("src", "images/spades_ace.png");
        $("#joker").attr("src", "images/joker_black.png");
    });
});
