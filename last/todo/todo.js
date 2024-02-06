const todoList = document.getElementById("todo-list");

//タスク追加
function addTask() {
  const taskName = document.getElementById("task-name");

  //タスク名の入力がなければ処理を終了
  if (taskName.value.trim() == "") return;

  //liに要素を追加
  const li = document.createElement("li");

  // liにinputを追加
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "task");
  li.appendChild(input);

  //liにpを追加
  const p = document.createElement("p");
  p.innerHTML = taskName.value;
  li.appendChild(p);

  // liに完了buttonを追加
  const endButton = createTaskButton("end-button", "完了");
  li.appendChild(endButton);

  // liに削除buttonを追加
  const deleteButton = createTaskButton("delete-button", "削除");
  li.appendChild(deleteButton);

  // ulにliを追加
  todoList.appendChild(li);

  taskName.value = "";

  // イベント処理
  // 完了ボタンクリック
  endButton.addEventListener("click", function (e) {
    e.preventDefault();
    this.setAttribute("class", "end-button disabled");
    this.previousElementSibling.setAttribute("class", "line-through");
  });

  // 削除ボタンクリック
  deleteButton.addEventListener("click", function (e) {
    e.preventDefault();
    todoList.removeChild(this.closest("li"));
  });
}

//チェックしたタスクを一括削除
function deleteTask() {
  const inputList = document.task_form.task;

  for (let i = inputList.length - 1; i >= 0; i--) {
    if (inputList[i].checked) {
      todoList.removeChild(inputList[i].closest("li"));
    }
  }
}

//タスク内にあるボタンを作成
function createTaskButton(className, name) {
  const btn = document.createElement("button");
  btn.setAttribute("class", className);
  btn.innerHTML = name;
  return btn;
}
