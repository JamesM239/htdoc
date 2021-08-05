var TicTacToe = {
    
    init: function (one, two) {
        this.onename = one;
        this.twoname = two;
        this.currentplayer = one;
        this.symbols = ["X", "O"];
        this.squares = Array.from(document.querySelectorAll(".square"));
        this.turnIndicator = document.querySelector(".turnIndicator");
        this.button = document.querySelector(".newGame");
        this.board = document.querySelector(".board");
        // square positions in which you can get 3-in-a-row
        this.winningSets = [
            // horizontal sets
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // vertical sets
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // diagonal sets
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.addEventListeners();
        this.newGame();
    },

    addEventListeners: function () {
        var ttt = this;
        this.squares.forEach(function (x) {
            x.addEventListener("click", function () {
                ttt.play(this);
            }, false)
        })

        document.getElementById("restart").addEventListener("click", function () {
            ttt.newGame();
        }, false);
    },

    newGame: function () {
        this.activePlayer = 0;
        this.gameOver = false;
        this.squares.forEach(function (x) {
            x.classList.remove(TicTacToe.symbols[0]);
            x.classList.remove(TicTacToe.symbols[1]);
        })
        this.board.classList.remove("gameOver");
        this.setTurnIndicator();
    },

    setTurnIndicator: function () {
        if(this.currentplayer != this.twoname)
        {
            this.turnIndicator.innerText = this.twoname + "'s turn.";
            this.currentplayer = this.twoname;
        }else
        {
            this.turnIndicator.innerText = this.onename + "'s turn.";
            this.currentplayer = this.onename;
        }
    },

    play: function (el) {
        if (!this.gameOver && el.classList.length == 1) {
            el.classList.add(this.symbols[this.activePlayer]);
            if (this.checkWin()) {
                this.turnIndicator.innerText = this.currentplayer + " wins!";
                // WIN
                audio = new Audio('./audio/victory.mp3'); 
                audio.play();
                this.endGame();
            } else if (this.checkDraw()) {
                this.turnIndicator.innerText = "Draw!";
                // Draw
                audio = new Audio('./audio/lose.mp3'); 
                audio.play();
                this.endGame();
            } else {
                this.activePlayer = 1 - this.activePlayer;
                this.setTurnIndicator();
            }
        }
    },

    checkWin: function () {
        var ttt = this;
        return this.winningSets.some(function (x) {
            return x.every(function (i) {
                return Array.from(ttt.squares[i].classList).indexOf(ttt.symbols[ttt.activePlayer]) > -1;
            })
        })
    },

    checkDraw: function () {
        return this.squares.every(function (x) {
            return x.classList.length > 1;
        })
    },

    endGame: function () {
        this.gameOver = true;
        this.board.classList.add("gameOver");
        document.getElementById('restart').classList.remove('d-none');
    }
}

function startGame(){
    var one = document.getElementById("onename").value;
    var two = document.getElementById("twoname").value;
    if(!one || !two) return;

    document.getElementById('userinput').classList.add("d-none");
    document.getElementById('tictactoe').classList.remove("d-none");
    var restart = document.getElementById('restart');
    restart.classList.add("d-none");
    restart.classList.remove("lower");
    document.getElementById('restart').innerText = "Play Again!";

    TicTacToe.init(one, two);
}