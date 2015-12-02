$(document).ready(function(){

	$('.start-game').on('click', function(e){
		console.log('star game');
		startGame();
		//console.log($(this));
		//$(this).unbind('click');
	});
	$('.stop-game').on('click', function(e){
		console.log('stop game');
		//console.log($(this));
		//$(this).unbind('click');
	});

	

});

var player = ['Player 1','Player 2'];

function startGame() {
		$('.matrix').unbind('click');
		$('.current-player').text(player[0]);
		$('.current-player').addClass('py1');
		$('.matrix').on('click', '.matrix-item', function(e){
			console.log($(this).index());
			$(this).addClass('inactive');
			$(this).removeClass('active');

			if (checkPlayer() == 'player1') {
				$('.current-player').text(player[1]);
				$('.current-player').removeClass('py1');
				$('.current-player').addClass('py2');
				//console.log('si player1');
				
			}
			else if (checkPlayer() == 'player2') {
				$('.current-player').text(player[0]);
				$('.current-player').removeClass('py2');
				$('.current-player').addClass('py1');
				//console.log('si player2');
			}
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