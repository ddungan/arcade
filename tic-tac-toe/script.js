const ex = 'x';
const oh = 'o';

let brd = {};

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
        comp = 2;
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
        comp = 2;
    } else if (brd.one && brd.two && brd.thr && brd.fou && brd.fiv && brd.six && brd.sev && brd.eig && brd.nin) {
        $('#no-wins-div').css('display', 'flex');
        comp = 2;
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
    brd = {};

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
    brd['one'] = oh;
    $('#one').replaceWith('<img src="images/ti-one-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playTwo() {
    brd['two'] = oh;
    $('#two').replaceWith('<img src="images/ti-two-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playThr() {
    brd['thr'] = oh;
    $('#thr').replaceWith('<img src="images/ti-thr-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playFou() {
    brd['fou'] = oh;
    $('#fou').replaceWith('<img src="images/ti-fou-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playFiv() {
    brd['fiv'] = oh;
    $('#fiv').replaceWith('<img src="images/ti-fiv-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playSix() {
    brd['six'] = oh;
    $('#six').replaceWith('<img src="images/ti-six-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playSev() {
    brd['sev'] = oh;
    $('#sev').replaceWith('<img src="images/ti-sev-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playEig() {
    brd['eig'] = oh;
    $('#eig').replaceWith('<img src="images/ti-eig-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playNin() {
    brd['nin'] = oh;
    $('#nin').replaceWith('<img src="images/ti-nin-o.png" />')
    updateTurn()
    didAnyoneWin()
}

function playComp() {
    if (comp === 1 && turn === oh) {
        if ((brd.two === oh && brd.thr === oh) 
        || (brd.fou === oh && brd.sev === oh) 
        || (brd.fiv === oh && brd.nin === oh)
        && (brd.one != ex)) {   
            playOne()
        } else if ((brd.one === oh && brd.thr === oh)
        || (brd.fiv === oh && brd.eig === oh)
        && (brd.two != ex)) {
            playTwo()
        } else if ((brd.one === oh && brd.two === oh)
        || (brd.six === oh && brd.nin === oh) 
        || (brd.fiv === oh && brd.sev === oh)
        && (brd.thr != ex)) {
            playThr()
        } else if ((brd.fiv === oh && brd.six === oh) 
        || (brd.one === oh && brd.sev === oh)
        && (brd.fou != ex)) {
            playFou()
        } else if ((brd.fou === oh && brd.six === oh)
        || (brd.two === oh && brd.eig === oh) 
        || (brd.one === oh && brd.nin === oh) 
        || (brd.thr === oh && brd.sev === oh)
        && (brd.fiv != ex)) {
            playFiv()
        } else if ((brd.fou === oh && brd.fiv === oh) 
        || (brd.thr === oh && brd.nin === oh)
        && (brd.six != ex)) {
            playSix()
        } else if ((brd.eig === oh && brd.nin === oh) 
        || (brd.one === oh && brd.fou === oh) 
        || (brd.thr === oh && brd.fiv === oh)
        && (brd.sev != ex)) {
            playSev()
        } else if ((brd.sev === oh && brd.nin === oh)
        || (brd.two === oh && brd.fiv === oh)
        && (brd.eig != ex)) {
            playEig()
        } else if ((brd.sev === oh && brd.eig === oh) 
        || (brd.thr === oh && brd.six === oh) 
        || (brd.one === oh && brd.fiv === oh)
        && (brd.nin != ex)) {
            playNin()
        } else if ((brd.two === ex && brd.thr === ex) 
        || (brd.fou === ex && brd.sev === ex) 
        || (brd.fiv === ex && brd.nin === ex)
        && (brd.one != ex)) {   
            playOne()
        } else if ((brd.one === ex && brd.thr === ex)
        || (brd.fiv === ex && brd.eig === ex)
        && (brd.two != ex)) {
            playTwo()
        } else if ((brd.one === ex && brd.two === ex)
        || (brd.six === ex && brd.nin === ex) 
        || (brd.fiv === ex && brd.sev === ex)
        && (brd.thr != ex)) {
            playThr()
        } else if ((brd.fiv === ex && brd.six === ex) 
        || (brd.one === ex && brd.sev === ex)
        && (brd.fou != ex)) {
            playFou()
        } else if ((brd.fou === ex && brd.six === ex)
        || (brd.two === ex && brd.eig === ex) 
        || (brd.one === ex && brd.nin === ex) 
        || (brd.thr === ex && brd.sev === ex)
        && (brd.fiv != ex)) {
            playFiv()
        } else if ((brd.fou === ex && brd.fiv === ex) 
        || (brd.thr === ex && brd.nin === ex)
        && (brd.six != ex)) {
            playSix()
        } else if ((brd.eig === ex && brd.nin === ex) 
        || (brd.one === ex && brd.fou === ex) 
        || (brd.thr === ex && brd.fiv === ex)
        && (brd.sev != ex)) {
            playSev()
        } else if ((brd.sev === ex && brd.nin === ex)
        || (brd.two === ex && brd.fiv === ex)
        && (brd.eig != ex)) {
            playEig()
        } else if ((brd.sev === ex && brd.eig === ex) 
        || (brd.thr === ex && brd.six === ex) 
        || (brd.one === ex && brd.fiv === ex)
        && (brd.nin != ex)) {
            playNin()
        } else if ((brd.one === ex)
        || (brd.thr === ex)
        || (brd.sev === ex)
        || (brd.sev === ex) 
        && (brd.fiv != ex)
        && (brd.fiv != oh)) {
            playFiv()
        } else if ((brd.fiv === ex)
        && (brd.nin != ex)
        && (brd.nin != oh)) {
            playNin()
        } else if ((brd.two === ex)
        || (brd.fou === ex)
        && (brd.nin != ex)
        && (brd.nin != oh)) {
            playNin()
        } else if ((brd.six === ex)
        || (brd.eig === ex)
        && (brd.one != ex)
        && (brd.one != oh)) {
            playOne()
        } else if ((brd.one != ex)
        && (brd.one != oh)) {
            playOne()
        } else if ((brd.two != ex)
        && (brd.two != oh)) {
            playTwo()
        } else if ((brd.thr != ex)
        && (brd.thr != oh)) {
            playThr()
        } else if ((brd.fou != ex)
        && (brd.fou != oh)) {
            playFou()
        } else if ((brd.fiv != ex)
        && (brd.fiv != oh)) {
            playFiv()
        } else if ((brd.six != ex)
        && (brd.six != oh)) {
            playSix()
        } else if ((brd.sev != ex)
        && (brd.sev !== oh)) {
            playSev()
        } else if ((brd.eig != ex)
        && (brd.eig !== oh)) {
            playEig()
        } else if ((brd.nin != ex)
        && (brd.nin !== oh)) {
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