let a = [{b: 123}]
let b = [...a]
a.push({c: 123})
a[0].b = 456
console.log(a, b)