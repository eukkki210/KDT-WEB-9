function arrElement<T> (Arr: T[], index: number): T | boolean {
  return Arr[index] ? Arr[index] : false
}

console.log(arrElement<string>(['a', 'b'], 3))
