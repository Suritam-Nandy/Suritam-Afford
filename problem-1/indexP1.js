const axios = require("axios");
var http = require("http");
const PrimeURL = "http://localhost:8090/primes";
const FiboURL = "http://localhost:8090/fibo";
const OddURL = "http://localhost:8090/odd";
const RandURL = "http://localhost:8090/rand";
const requestPrime = axios.get(PrimeURL);
const requestFibo = axios.get(FiboURL);
const requestOdd = axios.get(OddURL);
const requestRand = axios.get(RandURL);
axios
  .all([requestPrime, requestFibo, requestOdd, requestRand])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0].data.numbers;
      const responseTwo = responses[1].data.numbers;
      const responesThree = responses[2].data.numbers;
      const responseFour = responses[3].data.numbers;

      let numbers = [
        ...new Set([
          ...responseOne,
          ...responseTwo,
          ...responesThree,
          ...responseFour,
        ]),
      ];
      console.log({ numbers });

      // use/access the results
    })
  )
  .catch((errors) => {
    // react on errors.
  });

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
