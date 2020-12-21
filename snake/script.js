let ex = 'x';
let oh = 'o';

let brd = {}

function didXWin() {
    if ((brd.one === ex && brd.two === ex && brd.thr === ex) 
    || (brd.fou === ex && brd.fiv === ex && brd.six === ex) 
    || (brd.sev === ex && brd.eig === ex && brd.nin === ex) 
    || (brd.one === ex && brd.fou === ex && brd.sev === ex) 
    || (brd.two === ex && brd.fiv === ex && brd.eig === ex) 
    || (brd.thr === ex && brd.six === ex && brd.nin === ex) 
    || (brd.one === ex && brd.fiv === ex && brd.nin === ex) 
    || (brd.thr === ex && brd.fiv === ex && brd.sev === ex)) {
        console.log('X WINS!!');
    }
}

function didOWin() {
    if ((brd.one === oh && brd.two === oh && brd.thr === oh) 
    || (brd.fou === oh && brd.fiv === oh && brd.six === oh) 
    || (brd.sev === oh && brd.eig === oh && brd.nin === oh) 
    || (brd.one === oh && brd.fou === oh && brd.sev === oh) 
    || (brd.two === oh && brd.fiv === oh && brd.eig === oh) 
    || (brd.thr === oh && brd.six === oh && brd.nin === oh) 
    || (brd.one === oh && brd.fiv === oh && brd.nin === oh) 
    || (brd.thr === oh && brd.fiv === oh && brd.sev === oh)) {
        console.log('O WINS!!');
    }
}

function didAnyoneWin() {
    didXWin()
    didOWin()
}

let turn;

function turnStart() {
    let randomNumber;
    function getRandomInt(max) {
        randomNumber = Math.floor(Math.random() * Math.floor(max));
      };
    getRandomInt(50);

    if(randomNumber % 2 === 0) {
        turn = ex
    } else { turn = oh }
}

turnStart()

function updateTurn() {
    if (turn === ex) {
        turn = oh
    } else if (turn === oh) {
        turn = ex
    }
}

function onBoardClick() {
    let clickSpace = this.id;

    $((this), '#board img').replaceWith('<img id="' + clickSpace + '" src="images/ti-' + clickSpace + '-' + turn + '.png" />')
    
    let space = clickSpace;

    brd[clickSpace] = turn

    updateTurn()
    
    didAnyoneWin()
}

$('#board img').click(onBoardClick)

function pageLoad(){
    $('.player-two').toggle()
}

pageLoad()

$('input[name=players]').change(function(){
    $('.player-two').toggle(this.value !== '1');
  });

  $('input[name=players]').change(function(){
    $('.computer').toggle(this.value !== '2');
  });