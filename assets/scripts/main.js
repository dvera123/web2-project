//subida 2

$(document).ready(function(){

	$('.start-game').on('click', function(e){
		//console.log('star game');
		//console.log($(this));
		//$(this).unbind('click');
		$(this).attr('disabled', 'disabled');
		$('.stop-game').removeAttr('disabled');
		startGame();
	});
	$('.stop-game').on('click', function(e){
		$(this).attr('disabled', 'disabled');
		$('.start-game').removeAttr('disabled');
		
		//console.log('stop game');
		//console.log($(this));
		//$(this).unbind('click');
		stopGame();
	});

	

});

var player = ['Player 1','Player 2'];

function startGame() {

		var $currentPlayer = $('.current-player');
		var $matrix = $('.matrix');
		
		$matrix.unbind('click');
		$currentPlayer.text(player[0]);
		$currentPlayer.addClass('py1');
		$matrix.on('click', '.matrix-item', function(e){
			console.log($(this).index());
			var myPlayer = checkPlayer();
			var $this = $(this);

			if (myPlayer == 'player1' && $this.hasClass('active')){
				$this.addClass('cross')
				hasWin(myPlayer);
				$currentPlayer.text(player[1]);
				$currentPlayer.removeClass('py1');
				$currentPlayer.addClass('py2');
				//console.log('si player1');
				

				
			}
			else if (myPlayer == 'player2' && $this.hasClass('active')){
				$this.addClass('circle')
				hasWin(myPlayer);
				$currentPlayer.text(player[0]);
				$currentPlayer.removeClass('py2');
				$currentPlayer.addClass('py1');
				//console.log('si player2');
				
			}

			$(this).addClass('inactive');
			$(this).removeClass('active');

			
		});
};

function checkPlayer() {
	var $currentPlayer = $('.current-player');

	if ($currentPlayer.hasClass('py1')== true) {
		return 'player1';
	}
	else if ($currentPlayer.hasClass('py2')== true) {
		return 'player2';
	}
}

function stopGame() {
	$('.matrix').unbind('click');
	$('.matrix-item').removeClass('inactive cross circle win').addClass('active');
	$('.current-player').removeClass('py1 py2').text('')
};

function hasWin(player) {

	var itemSing = '';

	if (player == 'player1') {
		itemSing = 'cross';
	}
	if (player == 'player2') {
		itemSing = 'circle';
	}

	var itemsArray = $('.matrix .matrix-item');


	if( $(itemsArray).eq(0).hasClass(itemSing) &&
	    $(itemsArray).eq(1).hasClass(itemSing) &&
	    $(itemsArray).eq(2).hasClass(itemSing) ){

		$(itemsArray).eq(0).addClass('win');		
		$(itemsArray).eq(1).addClass('win');
		$(itemsArray).eq(2).addClass('win');

		$('.matrix').unbind('click');
	}
	if( $(itemsArray).eq(0).hasClass(itemSing) &&
	    $(itemsArray).eq(3).hasClass(itemSing) &&
	    $(itemsArray).eq(6).hasClass(itemSing) ){

		$(itemsArray).eq(0).addClass('win');		
		$(itemsArray).eq(3).addClass('win');
		$(itemsArray).eq(6).addClass('win');

		$('.matrix').unbind('click');
	}
	if( $(itemsArray).eq(0).hasClass(itemSing) &&
	    $(itemsArray).eq(4).hasClass(itemSing) &&
	    $(itemsArray).eq(8).hasClass(itemSing) ){

		$(itemsArray).eq(0).addClass('win');		
		$(itemsArray).eq(4).addClass('win');
		$(itemsArray).eq(8).addClass('win');

		$('.matrix').unbind('click');
	}
	if( $(itemsArray).eq(1).hasClass(itemSing) &&
	    $(itemsArray).eq(4).hasClass(itemSing) &&
	    $(itemsArray).eq(7).hasClass(itemSing) ){

		$(itemsArray).eq(1).addClass('win');		
		$(itemsArray).eq(4).addClass('win');
		$(itemsArray).eq(7).addClass('win');

		$('.matrix').unbind('click');
	}
	if( $(itemsArray).eq(2).hasClass(itemSing) &&
	    $(itemsArray).eq(4).hasClass(itemSing) &&
	    $(itemsArray).eq(6).hasClass(itemSing) ){

		$(itemsArray).eq(2).addClass('win');		
		$(itemsArray).eq(4).addClass('win');
		$(itemsArray).eq(6).addClass('win');

		$('.matrix').unbind('click');
	}
	if( $(itemsArray).eq(2).hasClass(itemSing) &&
	    $(itemsArray).eq(5).hasClass(itemSing) &&
	    $(itemsArray).eq(8).hasClass(itemSing) ){

		$(itemsArray).eq(2).addClass('win');		
		$(itemsArray).eq(5).addClass('win');
		$(itemsArray).eq(8).addClass('win');

		$('.matrix').unbind('click');
	}
	if( $(itemsArray).eq(5).hasClass(itemSing) &&
	    $(itemsArray).eq(4).hasClass(itemSing) &&
	    $(itemsArray).eq(3).hasClass(itemSing) ){

		$(itemsArray).eq(5).addClass('win');		
		$(itemsArray).eq(4).addClass('win');
		$(itemsArray).eq(3).addClass('win');

		$('.matrix').unbind('click');
	}
	if( $(itemsArray).eq(8).hasClass(itemSing) &&
	    $(itemsArray).eq(7).hasClass(itemSing) &&
	    $(itemsArray).eq(6).hasClass(itemSing) ){

		$(itemsArray).eq(8).addClass('win');		
		$(itemsArray).eq(7).addClass('win');
		$(itemsArray).eq(6).addClass('win');

		$('.matrix').unbind('click');
	}


}

