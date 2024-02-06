const addMemoButton = document.querySelector(".add-memo");

addMemoButton.addEventListener("click", function () {
  const newMemoInput = document.querySelector(".new-memo");

  const newMemo = document.createElement("li");
  newMemo.textContent = newMemoInput.value;

  const memoList = document.querySelector(".memo-list");
  memoList.append(newMemo);
});
