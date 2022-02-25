const axios = require("axios");

let numbers = [];
const URL = "http://localhost:8090";

axios
  .get(`${URL}/primes`)

  .then((res) => {
    const numPrimes = res.data.numbers;
    console.log("primes", numPrimes);
  })
  .catch((err) => console.log(err));

axios
  .get(`${URL}/fibo`)

  .then((res) => {
    const numFibo = res.data.numbers;
    console.log("Fibo", numFibo);
  })
  .catch((err) => console.log(err));

axios
  .get(`${URL}/odd`)

  .then((res) => {
    const numOdd = res.data.numbers;
    console.log("Odd", numOdd);
  })
  .catch((err) => console.log(err));

axios
  .get(`${URL}/rand`)

  .then((res) => {
    const numRand = res.data.numbers;
    console.log("Rand", numRand);
  })
  .catch((err) => console.log(err));
