class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.playerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol === 'x' ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.playerSymbol++;
        }
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    getWinner() {
        const fieldCell = this.field;
        let winner = null;

        if (fieldCell[0][0] === fieldCell[1][1] && fieldCell[0][0] === fieldCell[2][2]) {
            winner = fieldCell[1][1];
        } else if (fieldCell[0][2] === fieldCell[1][1] && fieldCell[0][2] === fieldCell[2][0]) {
            winner = fieldCell[1][1];
        } else {
            for (let i = 0; i < 3; i++) {
                if (fieldCell[i][0] === fieldCell[i][1] && fieldCell[i][0] === fieldCell[i][2]) {
                    winner = fieldCell[i][0];
                    break;
                }
                if (fieldCell[0][i] === fieldCell[1][i] && fieldCell[0][i] === fieldCell[2][i]) {
                    winner = fieldCell[0][i];
                    break;
                }
            }
        }
        return winner;
    }

    noMoreTurns() { 
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] === null) {
                    count++;
                }
            }
        }
        return count === 0;
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) {
            return true;
        } return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
        }
    }

module.exports = TicTacToe;

    