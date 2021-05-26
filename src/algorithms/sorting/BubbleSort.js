class BubblSort {

  constructor(height, width) {
    this.sortedList = [];
    return this;
  }

  get result() {
    return this.sortedList;
  }

  run(input) {
    let len = input.length;
    let checked;
    do {
      checked = false;
      for (let i = 0; i < len; i++) {
        if (input[i] > input[i + 1]) {
          let tmp = input[i];
          input[i] = input[i + 1];
          input[i + 1] = tmp;
          checked = true;
        }
      }
    } while (checked);
    this.sortedList = input;
    return this;
  }
}

let input = [2, 4, 1, 23, 45, 6, 7, 89];
let sort = new BubblSort().run(input);
console.log(sort.result)