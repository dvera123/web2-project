$(document).ready(function() {

    $('.start-game').on('click', function(e) {
        $(this).attr('disabled', 'disabled');
        $('.stop-game').removeAttr('disabled');
        console.log('start game');
        startGame();
    });

    $('.stop-game').on('click', function(e) {
        $(this).attr('disabled', 'disabled');
        $('.start-game').removeAttr('disabled');
        console.log('stop game');
        stopGame();
    });

});

var players = ['Player 1', 'Player 2'];

function startGame() {

    $('.current-player').text(players[0]);

    $('.current-player').addClass('py1');

    $('.matrix').unbind('click');

    $('.matrix').on('click', '.matrix-item',function(e) {
        console.log($(this).index());

        if(checkPlayer() == 'player1' && $(this).hasClass('active')) {
            $(this).addClass('cross');
            hasWin( checkPlayer() );

            $('.current-player').text(players[1]);
            $('.current-player').removeClass('py1');
            $('.current-player').addClass('py2'); 
        }

        else if(checkPlayer() == 'player2' && $(this).hasClass('active')) {
            $(this).addClass('circle');
            hasWin( checkPlayer() );

            $('.current-player').text(players[0]);
            $('.current-player').removeClass('py2');
            $('.current-player').addClass('py1');
            $(this).addClass('circle');
        }

        $(this).addClass('inactive');
        $(this).removeClass('active');

    });
};


function stopGame() {

    $('.matrix').unbind('click');

    $('.matrix-item')
        .removeClass('inactive cross circle win')
        .addClass('active');

    $('.current-player')
        .removeClass('py1 py2')
        .text('');
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

function hasWin(player) {

    var itemSign = '';

    if(player == 'player1') {
        itemSign = 'cross';
    }

    else if(player == 'player2') {
        itemSign = 'circle';
    }

    var itemsArray = $('.matrix .matrix-item');

    if( $(itemsArray).eq(0).hasClass(itemSign) &&
        $(itemsArray).eq(1).hasClass(itemSign) &&
        $(itemsArray).eq(2).hasClass(itemSign) ) {

        $(itemsArray).eq(0).addClass('win');
        $(itemsArray).eq(1).addClass('win');
        $(itemsArray).eq(2).addClass('win');

        $('.matrix').unbind('click');
    }

    if( $(itemsArray).eq(3).hasClass(itemSign) &&
        $(itemsArray).eq(4).hasClass(itemSign) &&
        $(itemsArray).eq(5).hasClass(itemSign) ) {

        $(itemsArray).eq(3).addClass('win');
        $(itemsArray).eq(4).addClass('win');
        $(itemsArray).eq(5).addClass('win');

        $('.matrix').unbind('click');
    }

    if( $(itemsArray).eq(6).hasClass(itemSign) &&
        $(itemsArray).eq(7).hasClass(itemSign) &&
        $(itemsArray).eq(8).hasClass(itemSign) ) {

        $(itemsArray).eq(6).addClass('win');
        $(itemsArray).eq(7).addClass('win');
        $(itemsArray).eq(8).addClass('win');

        $('.matrix').unbind('click');
    }

    if( $(itemsArray).eq(0).hasClass(itemSign) &&
        $(itemsArray).eq(3).hasClass(itemSign) &&
        $(itemsArray).eq(6).hasClass(itemSign) ) {

        $(itemsArray).eq(0).addClass('win');
        $(itemsArray).eq(3).addClass('win');
        $(itemsArray).eq(6).addClass('win');

        $('.matrix').unbind('click');
    }

    if( $(itemsArray).eq(2).hasClass(itemSign) &&
        $(itemsArray).eq(5).hasClass(itemSign) &&
        $(itemsArray).eq(8).hasClass(itemSign) ) {

        $(itemsArray).eq(2).addClass('win');
        $(itemsArray).eq(5).addClass('win');
        $(itemsArray).eq(8).addClass('win');

        $('.matrix').unbind('click');
    }

    if( $(itemsArray).eq(0).hasClass(itemSign) &&
        $(itemsArray).eq(4).hasClass(itemSign) &&
        $(itemsArray).eq(8).hasClass(itemSign) ) {

        $(itemsArray).eq(0).addClass('win');
        $(itemsArray).eq(4).addClass('win');
        $(itemsArray).eq(8).addClass('win');

        $('.matrix').unbind('click');
    }

    if( $(itemsArray).eq(2).hasClass(itemSign) &&
        $(itemsArray).eq(4).hasClass(itemSign) &&
        $(itemsArray).eq(6).hasClass(itemSign) ) {

        $(itemsArray).eq(2).addClass('win');
        $(itemsArray).eq(4).addClass('win');
        $(itemsArray).eq(6).addClass('win');

        $('.matrix').unbind('click');
    }

    if( $(itemsArray).eq(1).hasClass(itemSign) &&
        $(itemsArray).eq(4).hasClass(itemSign) &&
        $(itemsArray).eq(7).hasClass(itemSign) ) {

        $(itemsArray).eq(1).addClass('win');
        $(itemsArray).eq(4).addClass('win');
        $(itemsArray).eq(7).addClass('win');

        $('.matrix').unbind('click');
    }
};





