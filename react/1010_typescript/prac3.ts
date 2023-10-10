function sum1 (a: number, b: number): void {
  console.log(a + b)
}
// sum1(5, 11)

function sum2 (...numbers: number[]): number {
  let total = 0
  for (let num of numbers) {
    total += num
  }
  return total
}

console.log(sum2(1, 2, 3, 4, 10))
