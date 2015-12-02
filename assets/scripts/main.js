$(document).ready(function() {

    $('.start-game').on('click', function(e) {
        console.log('start game');
        startGame();
    });

    $('.stop-game').on('click', function(e) {
        console.log('stop game');
        //$(this).unbind('click');
    });

});

var players = ['Player 1', 'Player 2'];

function startGame() {

    $('.current-player').text(players[0]);

    $('.current-player').addClass('py1');

    $('.matrix').unbind('click');

    $('.matrix').on('click', '.matrix-item',function(e) {
        console.log($(this).index());
        $(this).addClass('inactive');
        $(this).removeClass('active');

        if(checkPlayer() == 'player1') {
            $('.current-player').text(players[1]);
            $('.current-player').removeClass('py1');
            $('.current-player').addClass('py2');
        }

        else if(checkPlayer() == 'player2') {
            $('.current-player').text(players[0]);
            $('.current-player').removeClass('py2');
            $('.current-player').addClass('py1');
        }
    });
};


function stopGame() {

};

function checkPlayer() {
    var $currentPlayer = $('.current-player');

    if($currentPlayer.hasClass('py1') == true) {
        return 'player1';
    }

    else if($currentPlayer.hasClass('py2') == true) {
        return 'player2';
    }
};



