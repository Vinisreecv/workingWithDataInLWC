import { LightningElement,track } from 'lwc';

export default class ApplicationForm extends LightningElement {
    @track nameOne = '';
    @track nameTwo = '';
    @track nameThree = '';
    @track nameFour = '';
    @track permutations = [];
    @track combinations = [];

    handleChange(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }

    calculatePermutations() {
        const names = [this.nameOne, this.nameTwo, this.nameThree, this.nameFour];
        const arr = names.map((name) => name[0] || '').join('');
        this.permutations = this.generatePermutations(arr).map((combo, index) => {
            return { id: index, combination: combo };
        });
    }

    calculateCombinations() {
        const names = [this.nameOne, this.nameTwo, this.nameThree, this.nameFour];
        this.combinations = this.generateCombinations(names).map((combo, index) => {
            return { id: index, combination: combo.join(', ') };
        });
    }

    generatePermutations(inputString) {
        const uniquePermutations = [];

        function generateUniquePermutations(arr, currentIndex) {
            if (currentIndex === arr.length - 1) {
                uniquePermutations.push(arr.join(''));
            } else {
                for (let i = currentIndex; i < arr.length; i++) {
                    [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]];
                    generateUniquePermutations([...arr], currentIndex + 1);
                }
            }
        }

        generateUniquePermutations(inputString.split(''), 0);
        return [...new Set(uniquePermutations)];
    }

    generateCombinations(inputArray) {
        const results = [];

        function generateHelper(current, start) {
            if (current.length === inputArray.length) {
                results.push([...current]);
                return;
            }

            for (let i = start; i < inputArray.length; i++) {
                current.push(inputArray[i]);
                generateHelper(current, i + 1);
                current.pop();
            }
        }

        generateHelper([], 0);
        return results;
    }

    get columns() {
        return [{ label: 'Combination', fieldName: 'combination' }];
    }
}