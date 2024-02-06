//追加する位置の取得
const categoryList = document.getElementById("category-list");

//カテゴリ追加
function addCategory(){
  const categoryName = document.getElementById("category-name");

  //タスク名の入力がなければ処理を終了
  if (categoryName.value.trim() == "") return;

  //formに要素を追加
  const div = document.createElement("div");
  div.classList.add('part-wrap');

  //formにカテゴリタイトルを追加
  const categoryTitle = document.createElement("h3");
  categoryTitle.innerHTML = categoryName.value;
  div.appendChild(categoryTitle);

  //formにカテゴリ削除ボタンを追加
  const category_deleteButton = createTaskButton("delete-button", "削除");
  div.appendChild(category_deleteButton);

  //formにタスク追加ボタンを追加
  const addButton = createTaskButton("add-button", "タスク追加");
  div.appendChild(addButton);

  //カテゴリをまとめるdivに各カテゴリ用のdivを追加
  categoryList.appendChild(div);

  categoryName.value = "";

  //イベント処理
  //削除ボタンクリック
  category_deleteButton.addEventListener("click", function(e){
    e.preventDefault();
    categoryList.removeChild(this.closest("div"));
  });

  //タスク追加ボタンをクリック
}

//タスク内にあるボタンを追加
function createTaskButton(className, name) {
  const btn = document.createElement("button");
  btn.setAttribute("class", className);
  btn.innerHTML = name;
  return btn;
}