const ex = 'x';
const oh = 'o';


let brd = {};

function emptyBrd() {
    brd = {
        one: null,
        two: null,
        thr: null,
        fou: null,
        fiv: null,
        six: null,
        sev: null,
        eig: null,
        nin: null
    };
}

emptyBrd()

let comp;

let oneScore = 0;

let twoScore = 0;

function didAnyoneWin() {
    if ((brd.one === ex && brd.two === ex && brd.thr === ex) 
    || (brd.fou === ex && brd.fiv === ex && brd.six === ex) 
    || (brd.sev === ex && brd.eig === ex && brd.nin === ex) 
    || (brd.one === ex && brd.fou === ex && brd.sev === ex) 
    || (brd.two === ex && brd.fiv === ex && brd.eig === ex) 
    || (brd.thr === ex && brd.six === ex && brd.nin === ex) 
    || (brd.one === ex && brd.fiv === ex && brd.nin === ex) 
    || (brd.thr === ex && brd.fiv === ex && brd.sev === ex)) {
        $('#x-wins-div').css('display', 'flex');
        oneScore += 1;
        $('#p1-sc').text(oneScore + '-');
    } else if ((brd.one === oh && brd.two === oh && brd.thr === oh) 
    || (brd.fou === oh && brd.fiv === oh && brd.six === oh) 
    || (brd.sev === oh && brd.eig === oh && brd.nin === oh) 
    || (brd.one === oh && brd.fou === oh && brd.sev === oh) 
    || (brd.two === oh && brd.fiv === oh && brd.eig === oh) 
    || (brd.thr === oh && brd.six === oh && brd.nin === oh) 
    || (brd.one === oh && brd.fiv === oh && brd.nin === oh) 
    || (brd.thr === oh && brd.fiv === oh && brd.sev === oh)) {
        $('#o-wins-div').css('display', 'flex');
        twoScore += 1
        $('#p2-sc').text('-' + twoScore);
    } else if (brd.one && brd.two && brd.thr && brd.fou && brd.fiv && brd.six && brd.sev && brd.eig && brd.nin) {
        $('#no-wins-div').css('display', 'flex');
    }
}

function didCompWin() {
    if ((brd.one === ex && brd.two === ex && brd.thr === ex) 
    || (brd.fou === ex && brd.fiv === ex && brd.six === ex) 
    || (brd.sev === ex && brd.eig === ex && brd.nin === ex) 
    || (brd.one === ex && brd.fou === ex && brd.sev === ex) 
    || (brd.two === ex && brd.fiv === ex && brd.eig === ex) 
    || (brd.thr === ex && brd.six === ex && brd.nin === ex) 
    || (brd.one === ex && brd.fiv === ex && brd.nin === ex) 
    || (brd.thr === ex && brd.fiv === ex && brd.sev === ex)) {
        $('#x-wins-div').css('display', 'flex');
    } else if ((brd.one === oh && brd.two === oh && brd.thr === oh) 
    || (brd.fou === oh && brd.fiv === oh && brd.six === oh) 
    || (brd.sev === oh && brd.eig === oh && brd.nin === oh) 
    || (brd.one === oh && brd.fou === oh && brd.sev === oh) 
    || (brd.two === oh && brd.fiv === oh && brd.eig === oh) 
    || (brd.thr === oh && brd.six === oh && brd.nin === oh) 
    || (brd.one === oh && brd.fiv === oh && brd.nin === oh) 
    || (brd.thr === oh && brd.fiv === oh && brd.sev === oh)) {
        $('#o-wins-div').css('display', 'flex');
        twoScore += 1
        $('#p2-sc').text('-' + twoScore);
    } else if (brd.one && brd.two && brd.thr && brd.fou && brd.fiv && brd.six && brd.sev && brd.eig && brd.nin) {
        $('#no-wins-div').css('display', 'flex');
    }
}

let turn = ex;

function updateTurn() {
    if (turn === ex) {
        turn = oh
    } else if (turn === oh) {
        turn = ex
    }
}

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

function compOn() {
    let y = document.getElementById("r-one").checked;
    if (y === true) {
        comp = 1
    } else {comp = 2}
}

function onStartClick() {
    let playerOne = $('input[name="player-1"]').val();

    let playerTwo = $('input[name="player-2"]').val();

    $('#p1').text(playerOne);

    $('#p2').text(playerTwo);

    compOn()

    $('#players-form-div').css('display', 'none')
}

$('#start').click(onStartClick)

function onAgainClick() {
    
    emptyBrd()

    turn = ex;

    $('#board').html(`<img class="n" id="one" src="images/ti-one-n.png" />
    <img class="n" id="two" src="images/ti-two-n.png" />
    <img class="n" id="thr" src="images/ti-thr-n.png" />
    <img class="n" id="fou" src="images/ti-fou-n.png" />
    <img class="n" id="fiv" src="images/ti-fiv-n.png" />
    <img class="n" id="six" src="images/ti-six-n.png" />
    <img class="n" id="sev" src="images/ti-sev-n.png" />
    <img class="n" id="eig" src="images/ti-eig-n.png" />
    <img class="n" id="nin" src="images/ti-nin-n.png" />`)

    $('#x-wins-div').css('display', 'none')
    $('#o-wins-div').css('display', 'none')
    $('#no-wins-div').css('display', 'none')
}

$('.again').click(onAgainClick)

function playOne() {
    brd.one = oh;
    $('#one').replaceWith('<img src="images/ti-one-o.png" />')
    updateTurn()
    didCompWin()
}

function playTwo() {
    brd.two = oh;
    $('#two').replaceWith('<img src="images/ti-two-o.png" />')
    updateTurn()
    didCompWin()
}

function playThr() {
    brd.thr = oh;
    $('#thr').replaceWith('<img src="images/ti-thr-o.png" />')
    updateTurn()
    didCompWin()
}

function playFou() {
    brd.fou = oh;
    $('#fou').replaceWith('<img src="images/ti-fou-o.png" />')
    updateTurn()
    didCompWin()
}

function playFiv() {
    brd.fiv = oh;
    $('#fiv').replaceWith('<img src="images/ti-fiv-o.png" />')
    updateTurn()
    didCompWin()
}

function playSix() {
    brd.six = oh;
    $('#six').replaceWith('<img src="images/ti-six-o.png" />')
    updateTurn()
    didCompWin()
}

function playSev() {
    brd.sev = oh;
    $('#sev').replaceWith('<img src="images/ti-sev-o.png" />')
    updateTurn()
    didCompWin()
}

function playEig() {
    brd.eig = oh;
    $('#eig').replaceWith('<img src="images/ti-eig-o.png" />')
    updateTurn()
    didCompWin()
}

function playNin() {
    brd.nin = oh;
    $('#nin').replaceWith('<img src="images/ti-nin-o.png" />')
    updateTurn()
    didCompWin()
}

function playComp() {
    if (comp === 1 && turn === oh) {
        if ((brd.two === oh && brd.thr === oh && brd.one === null) 
        || (brd.fou === oh && brd.sev === oh && brd.one === null) 
        || (brd.fiv === oh && brd.nin === oh && brd.one === null)) {   
            playOne()
        } else if ((brd.one === oh && brd.thr === oh && brd.two === null)
        || (brd.fiv === oh && brd.eig === oh && brd.two === null)) {
            playTwo()
        } else if ((brd.one === oh && brd.two === oh && brd.thr === null)
        || (brd.six === oh && brd.nin === oh && brd.thr === null) 
        || (brd.fiv === oh && brd.sev === oh && brd.thr === null)) {
            playThr()
        } else if ((brd.fiv === oh && brd.six === oh && brd.fou === null) 
        || (brd.one === oh && brd.sev === oh && brd.fou === null)) {
            playFou()
        } else if ((brd.fou === oh && brd.six === oh && brd.fiv === null)
        || (brd.two === oh && brd.eig === oh && brd.fiv === null) 
        || (brd.one === oh && brd.nin === oh && brd.fiv === null) 
        || (brd.thr === oh && brd.sev === oh && brd.fiv === null)) {
            playFiv()
        } else if ((brd.fou === oh && brd.fiv === oh && brd.six === null) 
        || (brd.thr === oh && brd.nin === oh && brd.six === null)) {
            playSix()
        } else if ((brd.eig === oh && brd.nin === oh && brd.sev === null) 
        || (brd.one === oh && brd.fou === oh && brd.sev === null) 
        || (brd.thr === oh && brd.fiv === oh && brd.sev === null)) {
            playSev()
        } else if ((brd.sev === oh && brd.nin === oh && brd.eig === null)
        || (brd.two === oh && brd.fiv === oh && brd.eig === null)) {
            playEig()
        } else if ((brd.sev === oh && brd.eig === oh && brd.nin === null) 
        || (brd.thr === oh && brd.six === oh && brd.nin === null) 
        || (brd.one === oh && brd.fiv === oh && brd.nin === null)) {
            playNin()
        } else if ((brd.two === ex && brd.thr === ex && brd.one === null) 
        || (brd.fou === ex && brd.sev === ex && brd.one === null) 
        || (brd.fiv === ex && brd.nin === ex && brd.one === null)) {   
            playOne()
        } else if ((brd.one === ex && brd.thr === ex && brd.two === null)
        || (brd.fiv === ex && brd.eig === ex && brd.two === null)) {
            playTwo()
        } else if ((brd.one === ex && brd.two === ex && brd.thr === null)
        || (brd.six === ex && brd.nin === ex && brd.thr === null) 
        || (brd.fiv === ex && brd.sev === ex && brd.thr === null)) {
            playThr()
        } else if ((brd.fiv === ex && brd.six === ex && brd.fou === null) 
        || (brd.one === ex && brd.sev === ex && brd.fou === null)) {
            playFou()
        } else if ((brd.fou === ex && brd.six === ex && brd.fiv === null)
        || (brd.two === ex && brd.eig === ex && brd.fiv === null) 
        || (brd.one === ex && brd.nin === ex && brd.fiv === null) 
        || (brd.thr === ex && brd.sev === ex && brd.fiv === null)) {
            playFiv()
        } else if ((brd.fou === ex && brd.fiv === ex && brd.six === null) 
        || (brd.thr === ex && brd.nin === ex && brd.six === null)) {
            playSix()
        } else if ((brd.eig === ex && brd.nin === ex && brd.sev === null) 
        || (brd.one === ex && brd.fou === ex && brd.sev === null) 
        || (brd.thr === ex && brd.fiv === ex && brd.sev === null)) {
            playSev()
        } else if ((brd.sev === ex && brd.nin === ex && brd.eig === null)
        || (brd.two === ex && brd.fiv === ex && brd.eig === null)) {
            playEig()
        } else if ((brd.sev === ex && brd.eig === ex && brd.nin === null) 
        || (brd.thr === ex && brd.six === ex && brd.nin === null) 
        || (brd.one === ex && brd.fiv === ex && brd.nin === null)) {
            playNin()
        } else if ((brd.one === ex && brd.fiv === null)
        || (brd.thr === ex && brd.fiv === null)
        || (brd.sev === ex && brd.fiv === null)
        || (brd.sev === ex && brd.fiv === null)) {
            playFiv()
        } else if (brd.fiv === ex && brd.nin === null) {
            playNin()
        } else if ((brd.two === ex && brd.nin === null)
        || (brd.fou === ex && brd.nin === null)) {
            playNin()
        } else if ((brd.six === ex && brd.one === null)
        || (brd.eig === ex && brd.one === null)) {
            playOne()
        } else if (brd.one === null) {
            playOne()
        } else if (brd.two === null) {
            playTwo()
        } else if (brd.thr === null) {
            playThr()
        } else if (brd.fou === null) {
            playFou()
        } else if (brd.fiv === null) {
            playFiv()
        } else if (brd.six === null) {
            playSix()
        } else if (brd.sev === null) {
            playSev()
        } else if (brd.eig === null) {
            playEig()
        } else if (brd.nin === null) {
            playNin()
        }
    }
}

$('#board').on('click', 'img.n', function(){
    let clickSpace = this.id;

    $((this), '#board img').replaceWith('<img src="images/ti-' + clickSpace + '-' + turn + '.png" />')
    
    let space = clickSpace;

    brd[clickSpace] = turn

    updateTurn()
    didAnyoneWin()
    playComp()
});