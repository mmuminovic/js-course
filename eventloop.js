const asyncFn = async () => "7";

console.log("3");
asyncFn().then((res) => {
  console.log(res);
});
setTimeout(() => {
  console.log("1");
}, 0);
