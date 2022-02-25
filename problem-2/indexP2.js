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
    if (data[i].prefix !== "not_applicable") {
      console.log(data[i].prefix);
      break;
    } else {
      let name = data[i].keyword;
      let temp = name;
      for (var i = 0; i < data.length; i++) {
        if (temp.sclice(0, -1) === data[i].keyword) data[i].prefix = name;
        else {
          name.sclice(0, -1);
        }
      }
    }
  }
}
console.log(data);
