const asyncFn1 = async () => {
  return "1";
};
const asyncFn2 = async () =>
  new Promise((resolve, reject) => {
    reject("Error");
  });
const asyncFn3 = async () => {
  return "3";
};

const doSomethingAsync = async () => {
  try {
    const res1 = await asyncFn1();
    console.log(res1);
    const res2 = await asyncFn2().catch((err) => {
      console.log(err);
      console.log("Hairli bilo");
    });
    console.log(res2);
    const res3 = await asyncFn3();
    console.log(res3);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Funkcija je izvrsena");
  }
};

doSomethingAsync();

