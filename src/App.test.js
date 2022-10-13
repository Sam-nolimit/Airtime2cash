function addNumber(input: number[]): number {
  return input.reduce((acc, cur) => acc + cur, 0);
}

test("Add an array of numbers together using reduce function", () => {
  expect(addNumber([10, 9])).toEqual(19);
})