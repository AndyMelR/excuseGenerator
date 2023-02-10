
function executeProgram() {
  window.onload = () => {
    //write your code here
    document.querySelector("#btn").addEventListener("click", () => {
      document.querySelector("#my_excuse").innerHTML = generateExcuse();
    });
  };
}

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const superWho = [{ id: "My dog", src: "https://giphy.com/embed/7792CoU4eXuoM" }, { id: "My turtle", src: "https://giphy.com/embed/j0RqBdOYVkzJJzJDoo" }, { id: "My grandma", src: "https://giphy.com/embed/jQAWv2kZe3hXA97PTu" }, { id: "My bird", src: "https://giphy.com/embed/X6Sm6CdSosJnJVa1tV" }];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class !",
  "right on time !",
  "when I finished !",
  "during my lunch !",
  "while I was praying !"
];

function getArrayLength(array) {
  let arrayLength = array.length;
  return arrayLength;
}

function getRandomOption(excuseOptions) {
  return Math.floor(Math.random() * getArrayLength(excuseOptions));
}

function generateExcuse(whoIndex, actionIndex, whatIndex, whenIndex) {
  whoIndex = getRandomOption(who);
  actionIndex = getRandomOption(action);
  whatIndex = getRandomOption(what);
  whenIndex = getRandomOption(when);

  document.getElementById("animation").src = superWho[whoIndex].src;
  return `${superWho[whoIndex].id}  ${action[actionIndex]}  ${what[whatIndex]}  ${when[whenIndex]}`;
};

executeProgram();








