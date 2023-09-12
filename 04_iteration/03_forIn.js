const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by Apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "rb", "py", "Java", "cpp"];

for (const key in programing) {
  console.log(programing[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  // console.log(key);
}
