class GuessingGame {
    constructor() { }
    start = null;
    end = null;
    currentNumber = null

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        this.currentNumber = Math.round((this.start + this.end) / 2)
        return this.currentNumber;
    }

    lower() {
        this.end = this.currentNumber
    }

    greater() {
        this.start = this.currentNumber
    }
}

module.exports = GuessingGame;


