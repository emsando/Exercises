const map = {};
const array = [];

for (let i = 0; i < 10; i++) {
  let obj = {
    index: i,
    value: i + 10,
  };

  array.push(obj);
  map[i] = obj;
}

array.forEach((obj, index) => console.log(map[index] === obj));

for (let key in map) {
  map[key]['test'] = 'California';
}

array.forEach(obj => console.log(obj));