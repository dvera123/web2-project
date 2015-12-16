$(document).ready(function() {

    $('.start-game').on('click', function(e) {
       
        startGame();
    });

    $('.stop-game').on('click', function(e) {

        stopGame();
    });

    if (annyang) {
        // Let's define our first command. First the text we expect, and then the function it should call
        var commands = {
            'start game': function() {
                startGame();
            },

            'stop game': function() {
                startGame();
            },

            'one': function() {
                $('.matrix-item').eq(0).click();
            },

            'two': function() {
                $('.matrix-item').eq(1).click();
            },

            'three': function() {
                $('.matrix-item').eq(2).click();
            },

            'four': function() {
                $('.matrix-item').eq(3).click();
            },

            'five': function() {
                $('.matrix-item').eq(4).click();
            },

            'six': function() {
                $('.matrix-item').eq(5).click();
            },

            'seven': function() {
                $('.matrix-item').eq(6).click();
            },

            'eight': function() {
                $('.matrix-item').eq(7).click();
            },

            'nine': function() {
                $('.matrix-item').eq(8).click();
            }

        };

        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start();
    }

});

//Global variables
var players = ['Player 1', 'Player 2'];

function startGame() {

    $('.start-game').attr('disabled', 'disabled');

    $('.stop-game').removeAttr('disabled');

    var $currentPlayer = $('.current-player');

    var $matrix = $('.matrix');

    $currentPlayer.text(players[0]);

    $currentPlayer.addClass('py1');

    $matrix.unbind('click');

    $matrix.on('click', '.matrix-item',function(e) {
        
        var myPlayer = checkPlayer();
        var $this = $(this);

        if(myPlayer == 'player1' && $this.hasClass('active')) {
            $this.addClass('cross');
            hasWin( myPlayer );

            $currentPlayer.text(players[1]);
            $currentPlayer.removeClass('py1');
            $currentPlayer.addClass('py2'); 
        }

        else if(myPlayer == 'player2' && $this.hasClass('active')) {
            $this.addClass('circle');
            hasWin( myPlayer );

            $currentPlayer.text(players[0]);
            $currentPlayer.removeClass('py2');
            $currentPlayer.addClass('py1');
            $this.addClass('circle');
        }

        $this.addClass('inactive');
        $this.removeClass('active');

    });
};


function stopGame() {

    $('.stop-game').attr('disabled', 'disabled');

    $('.start-game').removeAttr('disabled');

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

    checkIfWin(itemsArray, itemSign);

    
};

function checkIfWin (itemsArray, itemSign) {

    for( var x=0; x<= itemsArray.length; x++){
        
        if( x%3==0 && x!=0) {
            if(itemsArray.eq(x-1).hasClass(itemSign) && 
                itemsArray.eq(x-2).hasClass(itemSign) &&
                itemsArray.eq(x-3).hasClass(itemSign))
            { 
                markifWin(x-1,x-2,x-3, itemsArray);
            }
        }

        if( x<3 ) {
            if(itemsArray.eq(x).hasClass(itemSign) && 
                itemsArray.eq(x+3).hasClass(itemSign)&&
                itemsArray.eq(x+6).hasClass(itemSign)) {

                markifWin(x,x+3,x+6, itemsArray);
                
            }
        }

        if(itemsArray.eq(2).hasClass(itemSign) && 
            itemsArray.eq(4).hasClass(itemSign)&&
            itemsArray.eq(6).hasClass(itemSign)) {

            markifWin(2,4,6, itemsArray);
        }

        if(itemsArray.eq(0).hasClass(itemSign) && 
            itemsArray.eq(4).hasClass(itemSign)&&
            itemsArray.eq(8).hasClass(itemSign)) {

            markifWin(0,4,8, itemsArray);
        }
    }

};

function markifWin (a,b,c, itemsArray) {
    $('.matrix').unbind('click');
    itemsArray.eq(a).addClass('win');
    itemsArray.eq(b).addClass('win');
    itemsArray.eq(c).addClass('win');
};