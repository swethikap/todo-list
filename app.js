let todo = [];

while (true) {
  let req = prompt("please enter your request");

  if (req === "quit") {
    console.log("quitting app");
    break;
  }

  if (req === "list") {
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
  } else if (req === "add") {
    let task = prompt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if (req === "delete") {
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("task deleted");
  }
}
