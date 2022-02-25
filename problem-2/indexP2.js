const data = [
  {
    keyword: "bonfire",
    prefix: "bonf",
  },
  {
    keyword: "bool",
    prefix: "not_applicable",
  },
  {
    keyword: "bonsai",
    prefix: "not_applicable",
  },
];
var flag = -1;
for (var i = 0; i < data.length; i++) {
  if (data[i].keyword == "bonfire" && data[i].prefix !== "not_applicable") {
    // flag is set to the index of the element
    console.log(data[i].prefix);
    break;
  }
}
