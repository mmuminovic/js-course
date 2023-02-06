const asyncFn = async() => '7'

console.log('3')
setTimeout(() => {
  console.log('1');
}, 10)
asyncFn().then((res) => {
  console.log(res);
})
setTimeout(() => {
  console.log('2');
}, 0)
console.log('8');
asyncFn().then((res) => {
  console.log('9');
})
