const BubbleSort = require('../../../src/algorithms/sorting/bubble/BubbleSort');

test('BubbleSort test', () => {
    let input = [2, 4, 1, 23, 45, 6, 7, 89];
    const sort = new BubbleSort().run(input);
    const itShouldBe = [
      1, 2, 4, 6,
      7, 23, 45, 89
    ];
    expect(sort.result).toStrictEqual(itShouldBe);
});