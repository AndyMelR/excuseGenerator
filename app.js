window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#my_excuse").innerHTML = generateExcuse();
    document.getElementById("animation").src = superWho[whoIndex].src;
  });

};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  const superWho = [{ id: "My dog", src: "https://giphy.com/embed/7792CoU4eXuoM" }, { id: "My turtle", src: "https://giphy.com/embed/j0RqBdOYVkzJJzJDoo" }, { id: "My grandma", src: "https://giphy.com/embed/jQAWv2kZe3hXA97PTu" }, { id: "My bird", src: "https://giphy.com/embed/X6Sm6CdSosJnJVa1tV" }];

  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class !",
    "right on time !",
    "when I finished !",
    "during my lunch !",
    "while I was praying !"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return `${superWho[whoIndex].id}  ${action[actionIndex]}  ${what[whatIndex]}  ${when[whenIndex]}`;

};


