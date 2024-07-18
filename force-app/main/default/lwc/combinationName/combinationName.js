import { LightningElement, track } from 'lwc';

export default class CombinationName extends LightningElement {

    @track nameOne = '';
    @track nameTwo = '';
    @track nameThree = '';
    @track nameFour = '';
    @track combinations = 0;

    handleChange(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }

    calculateCombinations() {
        const names = [this.nameOne, this.nameTwo, this.nameThree, this.nameFour];
        const uniqueNames = [...new Set(names)]; // Remove duplicates
        const numberOfCombinations = this.factorial(uniqueNames.length);
        this.combinations = numberOfCombinations;
    }

    factorial(n) {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    }
}